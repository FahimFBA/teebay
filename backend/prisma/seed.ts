import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // User upsert
    const users = [
      {
        id: 1,
        email: "editusertest@example.com",
        password: "$2b$10$OFT3uzMNmmtvsQC7slpYYuI2zX4GQnkybhVzx3aiaVzby9Ycrs6FC",
        name: "Edit User",
        createdAt: new Date("2025-02-20T17:58:55.281Z"),
        updatedAt: new Date("2025-02-20T18:00:10.073Z"),
      },
      {
        id: 2,
        email: "updatedemail@example.com",
        password: "$2b$10$8shjZiCukS5SCvfa07tBy.yDNXfquIezL8Gi7kbFE/VgLYxatBhEm",
        name: "Updated Name",
        createdAt: new Date("2025-02-20T18:02:32.544Z"),
        updatedAt: new Date("2025-02-20T18:07:27.748Z"),
      },
      {
        id: 3,
        email: "newuser2@example.com",
        password: "$2b$10$3kuDnh2yNDpGvwPV8m9OKeELTS4ZJGgARL0u3sh5uH4mHdxj0JUfy",
        name: "Md. Fahim Bin Amin",
        createdAt: new Date("2025-02-20T18:05:03.888Z"),
        updatedAt: new Date("2025-02-26T13:33:38.556Z"),
      },
      {
        id: 4,
        email: "newuser4@example.com",
        password: "$2b$10$.GB0De7QvDc3w6N1XZ28.uAH32n11jNy6XNKnOvUVvIxdAYj5qhFK",
        name: "New User",
        createdAt: new Date("2025-02-20T18:32:40.315Z"),
        updatedAt: new Date("2025-02-20T18:32:40.315Z"),
      },
      {
        id: 5,
        email: "newuser5@example.com",
        password: "$2b$10$8XVeyil3NLNg/gaPLIzi8uzammI3wPIkpcOezlbefsXBWFVIyOXca",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:09.435Z"),
        updatedAt: new Date("2025-02-20T18:33:09.435Z"),
      },
      {
        id: 6,
        email: "newuser6@example.com",
        password: "$2b$10$yRtMNgdEW/2B9eP8htxBpe7N6FWKI3ct..xL.lebP3aIdp4d2zaae",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:30.927Z"),
        updatedAt: new Date("2025-02-20T18:33:30.927Z"),
      },
      {
        id: 7,
        email: "newuser7@example.com",
        password: "$2b$10$VNdEbGulceUYMdyRwp7y3ediv3PjYnbsldNbrt2fdfRgIB6Ysbk36",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:43.955Z"),
        updatedAt: new Date("2025-02-20T18:33:43.955Z"),
      },
      {
        id: 8,
        email: "newuser8@example.com",
        password: "$2b$10$SReITX9laTa8QLWAbLvdUeu4SM9DC8SUiaSBvaZDfv64O3CEwMJ9G",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:49.345Z"),
        updatedAt: new Date("2025-02-20T18:33:49.345Z"),
      },
      {
        id: 9,
        email: "newuser9@example.com",
        password: "$2b$10$RxxZvXtDF4j9FuUUx0lpQOS2wWhlE0MI6zoA4LpqFbMFXWcsvNX8m",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:52.134Z"),
        updatedAt: new Date("2025-02-20T18:33:52.134Z"),
      },
      {
        id: 10,
        email: "newuser10@example.com",
        password: "$2b$10$fN7kB.OpWv/f7YAaDlW5uOyOHEJi2AUaee/g3wlP8k2z/iIR3qRZe",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:55.445Z"),
        updatedAt: new Date("2025-02-20T18:33:55.445Z"),
      },
    ];

    for (const user of users) {
      await prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user,
      });
    }

    // Product upsert
    const products = [];
    const categories = ['ELECTRONICS', 'HOMEAPPLIANCES', 'FURNITURE', 'SPORTING_GOODS', 'OUTDOOR'];
    
    for (let i = 1; i <= 450; i++) {
      const product = {
        id: i,
        ownerId: Math.floor(Math.random() * 10) + 1, // Random owner ID between 1 and 10
        name: `Product ${i}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        price: parseFloat((Math.random() * 1000 + 10).toFixed(2)),
        rent: Math.random() > 0.5 ? parseFloat((Math.random() * 100 + 5).toFixed(2)) : null,
        rentedTo: Math.random() > 0.7 ? Math.floor(Math.random() * 10) + 1 : null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      products.push(product);
    }

    for (const product of products) {
      await prisma.product.upsert({
        where: { id: product.id },
        update: product,
        create: product,
      });
    }

    console.log('Products seeded successfully');

    console.log('Seed data upserted successfully')

    // Verify the data
    const userCount = await prisma.user.count();
    console.log(`Number of users in the database: ${userCount}`);

    const productCount = await prisma.product.count();
    console.log(`Number of products in the database: ${productCount}`);

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
