# Teebay

Teebay is an Express TypeScript API project that uses Prisma as an ORM to interact with a PostgreSQL database.

## Project Setup

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd teebay
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   - Copy `.env.example` to `.env`
   - Update the `DATABASE_URL` in `.env` with your PostgreSQL connection string

4. Set up the database:
   ```
   npx prisma migrate dev --name init
   npx prisma generate
   ```

## Running the Application

To start the development server:

```
npm run dev
```

The server will start on `http://localhost:3001`.

## API Endpoints

- `POST /users`: Create a new user
- `GET /users`: Get all users
- `GET /test-db-connection`: Test the database connection

## Database Schema

The current schema includes a `User` model:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Commands Used

- Project initialization:
  ```
  npm init -y
  ```

- Installing dependencies:
  ```
  npm install express @types/express @prisma/client pg
  npm install -D typescript @types/node ts-node nodemon prisma
  ```

- TypeScript configuration:
  ```
  npx tsc --init
  ```

- Prisma setup:
  ```
  npx prisma init
  npx prisma migrate dev --name init
  npx prisma generate
  ```

- Running the server:
  ```
  npm run dev
  ```

## Development

The project uses nodemon for hot-reloading during development. Any changes to the TypeScript files will automatically restart the server.

## Testing

To test the API endpoints, you can use tools like curl or Postman. For example:

```
curl http://localhost:3001/test-db-connection
```

This should return a JSON response indicating whether the database connection was successful.
