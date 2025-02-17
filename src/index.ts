import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Input validation function
const validateInput = (email: string, password: string): string | null => {
  if (!email || !password) {
    return "Email and password are required";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Invalid email format";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  return null;
};

// Register a new user
app.post("/register-user", async (req, res) => {
  const { name, email, password } = req.body;

  const validationError = validateInput(email, password);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (error: unknown) {
    if (error instanceof Error) {
      if ("code" in error && error.code === "P2002") {
        res.status(400).json({ error: "Email already exists" });
      } else {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Unable to create user" });
      }
    } else {
      console.error("Unknown error:", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const validationError = validateInput(email, password);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ id: user.id, name: user.name, email: user.email });
  } catch (error: unknown) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Unable to log in" });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(200).json(users);
  } catch (error: unknown) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Unable to fetch users" });
  }
});

// Test database connection
app.get("/test-db-connection", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ message: "Successfully connected to the database" });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: "Unable to connect to the database" });
  }
});

// Products API

// Input validation function for products
const validateProductInput = (
  name: string,
  category: string,
  price: number,
  rent?: number
): string | null => {
  if (!name || name.trim() === "") {
    return "Product name is required";
  }
  if (!category || category.trim() === "") {
    return "Product category is required";
  }
  if (typeof price !== "number" || price <= 0) {
    return "Price must be a positive number";
  }
  if (rent !== undefined && (typeof rent !== "number" || rent < 0)) {
    return "Rent must be a non-negative number";
  }
  return null;
};

// This endpoint will get all products
app.get("/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { owner: { select: { id: true, name: true, email: true } } },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

// This endpoint will get one product
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
      include: { owner: { select: { id: true, name: true, email: true } } },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Unable to fetch product" });
  }
});

// This endpoint will create 1 product
app.post("/create-product", async (req, res) => {
  const { ownerId, name, category, price, rent } = req.body;
  const validationError = validateProductInput(name, category, price, rent);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  try {
    const product = await prisma.product.create({
      data: {
        ownerId: parseInt(ownerId),
        name,
        category,
        price,
        rent,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Unable to create product" });
  }
});

// This endpoint will update 1 product
app.patch("/update-product/:id", async (req, res) => {
  const { id } = req.params;
  const { name, category, price, rent } = req.body;
  const validationError = validateProductInput(name, category, price, rent);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, category, price, rent },
    });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Unable to update product" });
  }
});

// This endpoint will delete 1 product
app.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Unable to delete product" });
  }
});

// Purchase a product
app.post("/purchase-product/:id", async (req, res) => {
  const { id } = req.params;
  const { buyerId } = req.body;
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { ownerId: parseInt(buyerId) },
    });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error purchasing product:", error);
    res.status(500).json({ error: "Unable to purchase product" });
  }
});

// Rent a product
app.post("/rent-product/:id", async (req, res) => {
  const { id } = req.params;
  const { renterId } = req.body;
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { rentedTo: parseInt(renterId) },
    });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error renting product:", error);
    res.status(500).json({ error: "Unable to rent product" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
