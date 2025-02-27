## Database Setup and Seeding

To set up the database and populate it with initial data, follow these steps:

1. Ensure you have PostgreSQL installed and running on your machine.

2. Create a new database for the project (e.g., `teebay`).

3. Update the `.env` file in the `backend` directory with your database connection string:

   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/teebay?schema=public"
   ```

   Replace `username`, `password`, and `teebay` with your PostgreSQL credentials and database name.

4. Navigate to the `backend` directory:

   ```
   cd backend
   ```

5. Install dependencies:

   ```
   npm install
   ```

6. Run Prisma migrations to create the database schema:

   ```
   npx prisma migrate dev
   ```

7. Seed the database with initial data:

   ```
   npx prisma db seed
   ```

This will create 10 users and 450 products in your database.

8. To verify the data, you can use Prisma Studio:

   ```
   npx prisma studio
   ```

   This will open a web interface where you can browse and manage your database data.
