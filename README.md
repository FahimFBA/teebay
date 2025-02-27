# Teebay Project

Teebay is a full-stack web application for buying, selling, and renting products. This project uses a React frontend with a Node.js backend, GraphQL API, and PostgreSQL database.

## Table of Contents

- [Teebay Project](#teebay-project)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Troubleshooting](#troubleshooting)
    - [Database Setup Issues](#database-setup-issues)
    - [Product Creation Issues](#product-creation-issues)
    - [Verifying Data](#verifying-data)
  - [Database Schema](#database-schema)
  - [Prisma Schema](#prisma-schema)
  - [Usage](#usage)
  - [Current Status](#current-status)
    - [Product](#product)
    - [Purchase](#purchase)
    - [Rent](#rent)
    - [UI](#ui)
    - [Future Improvements](#future-improvements)
  - [Test User](#test-user)
  - [API Documentation](#api-documentation)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication (register, login, logout)
- Product management (create, read, update, delete)
- Buy and sell products
- Rent products
- User profile management
- Responsive design for mobile and desktop

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- API: GraphQL with Apollo Server
- Database: PostgreSQL with Prisma ORM
- Authentication: JSON Web Tokens (JWT)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL (v12 or later)
- Git

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/FahimFBA/teebay.git
   cd teebay
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up the database:
   - Create a new PostgreSQL database for the project.
   - Copy the `.env.example` file to `.env` and update the `DATABASE_URL` with your database credentials:
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/teebay_db"
     ```

4. Set up the database, generate Prisma client, and apply migrations:
   ```
   npx prisma generate
   npx prisma migrate dev
   ```

   These commands do the following:
   - `npx prisma generate`: Generates the Prisma client based on your schema
   - `npx prisma migrate dev`: Applies all pending migrations and creates a new one if there are schema changes
  
  
> [!IMPORTANT]  
> Always run these commands after pulling new changes or when switching branches to ensure your database schema is up-to-date.

5. Seed the database with initial data:
   ```
   npx prisma db seed
   ```

>[!IMPORTANT]
> This step is crucial to populate your database with all the necessary data for development and testing.

6. Start the backend server:
   ```
   npm run dev
   ```

7. In a new terminal, install frontend dependencies:
   ```
   cd frontend
   npm install --force
   ```

8. Start the frontend development server:
   ```
   npm run dev
   ```

9. Access the application in your web browser at `http://localhost:5173` (or the port specified by Vite).

> [!NOTE]
> Note: If you encounter any issues during the installation process, particularly with database setup or product creation, please refer to the Troubleshooting section below.

## Troubleshooting

### Database Setup Issues

If you encounter issues during database setup or migration:

1. Ensure your PostgreSQL server is running and the DATABASE_URL in your .env file is correct.

2. If migrations fail, try resetting the database (this will delete all data):
   ```
   npx prisma migrate reset
   ```

3. If the reset doesn't work, manually delete the `prisma/migrations` folder:
   ```
   rm -rf prisma/migrations
   ```
   (On Windows, use `rmdir /s /q prisma\migrations`)

4. Then run the migration command again:
   ```
   npx prisma migrate dev
   ```

### Product Creation Issues

If you're experiencing problems creating new products, such as ID conflicts:

1. Ensure you've run all migrations, especially the one that resets the Product table's auto-increment sequence:
   ```
   npx prisma migrate dev
   ```

2. If the issue persists, try applying the specific migration for resetting the Product sequence:
   ```
   npx prisma migrate resolve --applied "20250227_reset_product_sequence"
   npx prisma migrate dev
   ```

3. If problems continue, check your database using Prisma Studio:
   ```
   npx prisma studio
   ```
   Verify that the Product table's ID sequence is correct.

4. If none of the above steps resolve the issue, please open an issue on the GitHub repository with details about the error you're encountering.

### Verifying Data

To confirm that all data has been properly seeded and the database is set up correctly:

1. Use Prisma Studio to view and manage your database:
   ```
   npx prisma studio
   ```
   This will open Prisma Studio in your default web browser, typically at `http://localhost:5555`.

2. Check the User and Product tables to ensure they contain the expected data.

If you encounter any unexpected issues not covered here, please refer to the project's issue tracker on GitHub or seek assistance from the project maintainers.

## Database Schema

```mermaid
erDiagram
    User {
        int id PK
        string email
        string name
        string password
        datetime createdAt
        datetime updatedAt
    }
    Product {
        int id PK
        int ownerId FK
        string name
        float price
        float rent
        int rentedTo
        datetime createdAt
        datetime updatedAt
        string category
        string productDescription
    }
    User ||--o{ Product : owns
```

## Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  password  String
  products  Product[]
}

model Product {
  id                 Int      @id @default(autoincrement())
  ownerId            Int
  name               String
  price              Float
  rent               Float?
  rentedTo           Int?
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
  category           String
  productDescription String?
  owner              User     @relation(fields: [ownerId], references: [id])
}
```

## Usage

1. Register a new account or log in with existing credentials.
2. Browse available products on the home page.
3. Click on a product to view details, buy, or rent.
4. To sell a product, click on "Add Product" and fill in the required information.
5. Manage your products and rentals from your user profile.

## Current Status

### Product
- ✅ Add Product
- ✅ Read 1 product 
- ✅ Read all products
- ✅ Delete Product
- ✅ Edit Product
- Add product Description (In progress)

### Purchase 
- ✅ Purchase a product

### Rent
- ✅ Rent a product
- ✅ Release a product

### UI 
- ✅ Navbar with Auth Features
- ✅ Debouncing

### Future Improvements
- Implement toaster notifications for better user feedback

## Test User

For testing purposes, you can use the following test user credentials:

- ID: 3
- Email: newuser2@example.com
- Password: newPassword1234

Please note that this information is for development and testing purposes only. Do not use these credentials in a production environment.

## API Documentation

The GraphQL API is available at `http://localhost:4000/graphql`. You can use GraphQL Playground to explore and test the API.

Some example queries and mutations:

```graphql
# Get all products
query {
  products {
    id
    name
    category
    price
    rent
  }
}

# Create a new product
mutation {
  createProduct(input: {
    name: "Example Product"
    category: "ELECTRONICS"
    price: 99.99
    rent: 9.99
  }) {
    id
    name
    category
    price
    rent
  }
}
```

For a full list of available queries and mutations, refer to the schema in GraphQL Playground.

## Contributing

Contributions to the Teebay project are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
