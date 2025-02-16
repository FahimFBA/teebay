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

// Products API || Table Name - Products
// columns -> id, owner_id, name, price, rent, rented_to, updated_at, created_at 

// This endpoint will get all products
app.get("/products", async (req, res) => {});
// This endpoint will get one product
app.get("/product", async (req, res) => {});
// This endpoint will create 1 product
app.post("/create-product", async (req, res) => {});
// This endpoint will update 1 product
app.patch("/update-product", async (req, res) => {});
// This endpoint will delete 1 product
app.delete("/delete-product", async (req, res) => {});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
