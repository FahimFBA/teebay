import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
  try {
    const users = await prisma.user.findMany();
    const products = await prisma.product.findMany();

    const output = `
Users in the database:
${JSON.stringify(users, null, 2)}

Products in the database:
${JSON.stringify(products, null, 2)}
    `;

    const outputPath = path.join(__dirname, 'db-check-result.txt');
    fs.writeFileSync(outputPath, output);

    console.log(`Database check complete. Results written to ${outputPath}`);
  } catch (error) {
    console.error('Error querying data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
