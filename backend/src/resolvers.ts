import { PrismaClient, User, Product } from "@prisma/client";
import { IResolvers } from "@graphql-tools/utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

const resolvers: IResolvers = {
  Query: {
    users: async (
      _: any,
      { page = 1, pageSize = 10 }: { page?: number; pageSize?: number }
    ) => {
      try {
        const totalCount = await prisma.user.count();
        const users = await prisma.user.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
        });
        return {
          users,
          totalCount,
          hasNextPage: page * pageSize < totalCount,
        };
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
    rentedProducts: async (_: any, { rentedTo }: { rentedTo: number }) => {
      try {
        return await prisma.product.findMany({
          where: { rentedTo },
          include: { owner: true },
        });
      } catch (error) {
        console.error("Error fetching rented products:", error);
        throw new Error("Failed to fetch rented products");
      }
    },
    user: async (_: any, { id }: { id: number }) => {
      try {
        return await prisma.user.findUnique({ where: { id } });
      } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
        throw new Error("Failed to fetch user");
      }
    },
    products: async (
      _: any,
      {
        page = 1,
        pageSize = 10,
        filters,
      }: {
        page?: number;
        pageSize?: number;
        filters?: { category?: string; minPrice?: number; maxPrice?: number };
      }
    ) => {
      try {
        const where: any = {};
        if (filters?.category) {
          where.category = filters.category;
        }
        if (filters?.minPrice || filters?.maxPrice) {
          where.price = {};
          if (filters.minPrice) where.price.gte = filters.minPrice;
          if (filters.maxPrice) where.price.lte = filters.maxPrice;
        }

        const totalCount = await prisma.product.count({ where });
        const products = await prisma.product.findMany({
          where,
          skip: (page - 1) * pageSize,
          take: pageSize,
        });
        return {
          products,
          totalCount,
          hasNextPage: page * pageSize < totalCount,
        };
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
      }
    },
    product: async (_: any, { id }: { id: number }) => {
      try {
        return await prisma.product.findUnique({ where: { id } });
      } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw new Error("Failed to fetch product");
      }
    },
  },
  Mutation: {
    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
          throw new Error("Invalid email or password");
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          throw new Error("Invalid email or password");
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: "1d",
        });

        return {
          token,
          user,
        };
      } catch (error) {
        console.error("Error during login:", error);
        throw new Error("Login failed");
      }
    },
    createUser: async (
      _: any,
      { input }: { input: { email: string; password: string; name?: string } }
    ) => {
      try {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        return await prisma.user.create({
          data: { ...input, password: hashedPassword },
        });
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
      }
    },
    updateUser: async (
      _: any,
      {
        id,
        input,
      }: {
        id: number;
        input: { email?: string; name?: string; password?: string };
      }
    ) => {
      try {
        const updateData: any = { ...input };
        if (input.password) {
          updateData.password = await bcrypt.hash(input.password, 10);
        }
        return await prisma.user.update({
          where: { id },
          data: updateData,
        });
      } catch (error) {
        console.error(`Error updating user with id ${id}:`, error);
        throw new Error("Failed to update user");
      }
    },
    createProduct: async (
      _: any,
      {
        input,
      }: {
        input: {
          ownerId: number;
          name: string;
          category: string;
          price: number;
          rent?: number;
        };
      }
    ) => {
      try {
        return await prisma.product.create({
          data: input,
        });
      } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product");
      }
    },
    updateProduct: async (
      _: any,
      {
        id,
        input,
      }: {
        id: number;
        input: {
          name?: string;
          category?: string;
          price?: number;
          rent?: number;
        };
      }
    ) => {
      try {
        return await prisma.product.update({
          where: { id },
          data: input,
        });
      } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw new Error("Failed to update product");
      }
    },
    deleteProduct: async (_: any, { id }: { id: number }) => {
      try {
        return await prisma.product.delete({
          where: { id },
        });
      } catch (error) {
        console.error(`Error deleting product with id ${id}:`, error);
        throw new Error("Failed to delete product");
      }
    },
    rentProduct: async (
      _: any,
      { id, rentedTo }: { id: number; rentedTo: number }
    ) => {
      try {
        return await prisma.product.update({
          where: { id },
          data: { rentedTo },
        });
      } catch (error) {
        console.error(`Error renting product with id ${id}:`, error);
        throw new Error("Failed to rent product");
      }
    },
  },
  User: {
    products: async (parent: User) => {
      try {
        return await prisma.product.findMany({ where: { ownerId: parent.id } });
      } catch (error) {
        console.error(
          `Error fetching products for user with id ${parent.id}:`,
          error
        );
        throw new Error("Failed to fetch user products");
      }
    },
  },
  Product: {
    owner: async (parent: Product) => {
      try {
        return await prisma.user.findUnique({ where: { id: parent.ownerId } });
      } catch (error) {
        console.error(
          `Error fetching owner for product with id ${parent.id}:`,
          error
        );
        throw new Error("Failed to fetch product owner");
      }
    },
  },
};

export default resolvers;
