-- AlterTable
ALTER TABLE "Product" ADD COLUMN "category" TEXT;

-- Update existing rows
UPDATE "Product" SET "category" = 'Uncategorized' WHERE "category" IS NULL;

-- Make the column NOT NULL
ALTER TABLE "Product" ALTER COLUMN "category" SET NOT NULL;
