import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Fetch all users
  const users = await prisma.user.findMany()
  
  // Fetch all products
  const products = await prisma.product.findMany()

  console.log('// Seed data')
  
  // Generate create statements for users
  users.forEach(user => {
    console.log(`
    await prisma.user.create({
      data: {
        id: ${user.id},
        email: "${user.email}",
        password: "${user.password}",
        name: ${user.name ? `"${user.name}"` : 'null'},
        createdAt: new Date("${user.createdAt.toISOString()}"),
        updatedAt: new Date("${user.updatedAt.toISOString()}"),
      },
    });`)
  })

  // Generate create statements for products
  products.forEach(product => {
    console.log(`
    await prisma.product.create({
      data: {
        id: ${product.id},
        ownerId: ${product.ownerId},
        name: "${product.name}",
        category: "${product.category}",
        price: ${product.price},
        rent: ${product.rent || 'null'},
        rentedTo: ${product.rentedTo || 'null'},
        createdAt: new Date("${product.createdAt.toISOString()}"),
        updatedAt: new Date("${product.updatedAt.toISOString()}"),
      },
    });`)
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
