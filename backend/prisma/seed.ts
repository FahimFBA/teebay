import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // User upsert
    await prisma.user.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        email: "editusertest@example.com",
        password: "$2b$10$OFT3uzMNmmtvsQC7slpYYuI2zX4GQnkybhVzx3aiaVzby9Ycrs6FC",
        name: "Edit User",
        createdAt: new Date("2025-02-20T17:58:55.281Z"),
        updatedAt: new Date("2025-02-20T18:00:10.073Z"),
      },
    });

    await prisma.user.upsert({
      where: { id: 2 },
      update: {},
      create: {
        id: 2,
        email: "updatedemail@example.com",
        password: "$2b$10$8shjZiCukS5SCvfa07tBy.yDNXfquIezL8Gi7kbFE/VgLYxatBhEm",
        name: "Updated Name",
        createdAt: new Date("2025-02-20T18:02:32.544Z"),
        updatedAt: new Date("2025-02-20T18:07:27.748Z"),
      },
    });

    // Product upsert
    await prisma.product.upsert({
      where: { id: 430 },
      update: {},
      create: {
        id: 430,
        ownerId: 2,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 425.39,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.upsert({
      where: { id: 431 },
      update: {},
      create: {
        id: 431,
        ownerId: 2,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 474.77,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    console.log('Seed data upserted successfully')

    // Verify the data
    const users = await prisma.user.findMany();
    console.log('Users in the database:');
    console.log(JSON.stringify(users, null, 2));

    const products = await prisma.product.findMany();
    console.log('Products in the database:');
    console.log(JSON.stringify(products, null, 2));

  } catch (error) {
    console.error('Error seeding data:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
