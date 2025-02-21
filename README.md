# Teebay

Teebay is a full-stack web application that combines a GraphQL API backend with a React frontend. It's designed to facilitate the buying, selling, and renting of products between users. The platform allows users to create accounts, list products for sale or rent, and manage their transactions.

## Technologies Used

### Backend
- Node.js
- Express
- TypeScript
- Apollo Server (GraphQL)
- Prisma (ORM)
- PostgreSQL
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Winston for logging

### Frontend
- React
- TypeScript
- Vite (build tool)
- Apollo Client (for GraphQL integration)
- React Router
- Tailwind CSS
- Radix UI (for accessible component primitives)

## Project Structure

The project is divided into two main directories:

- `backend/`: Contains the GraphQL API server
  - `src/`: Source files for the backend
    - `index.ts`: Entry point of the server
    - `schema.ts`: GraphQL schema definition
    - `resolvers.ts`: GraphQL resolvers
  - `prisma/`: Prisma ORM files
    - `schema.prisma`: Database schema definition
  - `.env.example`: Example environment variables for the backend

- `frontend/`: Contains the React application
  - `src/`: Source files for the frontend
    - `components/`: Reusable React components
    - `Pages/`: React components for different routes
    - `store/`: State management files (e.g., GraphQL queries)
    - `context/`: React context files (e.g., AuthContext)
    - `App.tsx`: Main application component
  - `vite.config.ts`: Vite build tool configuration
  - `.env.example`: Example environment variables for the frontend

Key configuration files:
- `tsconfig.json`: TypeScript configuration for both backend and frontend
- `package.json`: Project dependencies and scripts for both backend and frontend
- `components.json`: (Frontend) Possibly contains component configurations

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` and update the database connection string and other environment variables.
4. Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```
5. Generate Prisma client:
   ```
   npx prisma generate
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` and update any necessary environment variables.

## Running the Application

### Backend
In the `backend` directory:
- For development: `npm run dev`
- For production: `npm start`

The GraphQL server will start on `http://localhost:4000` (or the port specified in your `.env` file).

### Frontend
In the `frontend` directory:
- For development: `npm run dev`
- For production build: `npm run build`

The development server will start on `http://localhost:5173`.

## Features

- User authentication and authorization
- User profile management
- Product listing creation and management
- Product search with filtering options
- Product rental system
- Pagination for users and products listings

## API Documentation

The backend uses GraphQL. Here's a brief overview of the main queries and mutations:

### Queries
- `users`: Fetch paginated list of users
- `user`: Fetch a single user by ID
- `products`: Fetch paginated list of products with optional filters
- `product`: Fetch a single product by ID
- `rentedProducts`: Fetch products rented by a specific user

### Mutations
- `login`: Authenticate a user and receive a JWT token
- `createUser`: Register a new user
- `updateUser`: Update user profile information
- `createProduct`: Create a new product listing
- `updateProduct`: Update an existing product listing
- `deleteProduct`: Remove a product listing
- `rentProduct`: Rent a product to a user

For full API documentation, run the backend server and visit the GraphQL Playground at `http://localhost:4000/graphql`.

## Frontend Routes

Based on the API structure, the frontend likely includes the following routes:

- `/`: Home page with product listings
- `/login`: User login page
- `/register`: User registration page
- `/profile`: User profile page
- `/products/new`: Create new product listing
- `/products/:id`: View product details
- `/products/:id/edit`: Edit product listing
- `/my-products`: User's product listings
- `/rented-products`: Products rented by the user



## Contributing

Contributions to Teebay are welcome! Here are some guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
