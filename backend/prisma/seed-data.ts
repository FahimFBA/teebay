// Seed data

    await prisma.user.create({
      data: {
        id: 1,
        email: "editusertest@example.com",
        password: "$2b$10$OFT3uzMNmmtvsQC7slpYYuI2zX4GQnkybhVzx3aiaVzby9Ycrs6FC",
        name: "Edit User",
        createdAt: new Date("2025-02-20T17:58:55.281Z"),
        updatedAt: new Date("2025-02-20T18:00:10.073Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 2,
        email: "updatedemail@example.com",
        password: "$2b$10$8shjZiCukS5SCvfa07tBy.yDNXfquIezL8Gi7kbFE/VgLYxatBhEm",
        name: "Updated Name",
        createdAt: new Date("2025-02-20T18:02:32.544Z"),
        updatedAt: new Date("2025-02-20T18:07:27.748Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 4,
        email: "newuser4@example.com",
        password: "$2b$10$.GB0De7QvDc3w6N1XZ28.uAH32n11jNy6XNKnOvUVvIxdAYj5qhFK",
        name: "New User",
        createdAt: new Date("2025-02-20T18:32:40.315Z"),
        updatedAt: new Date("2025-02-20T18:32:40.315Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 5,
        email: "newuser5@example.com",
        password: "$2b$10$8XVeyil3NLNg/gaPLIzi8uzammI3wPIkpcOezlbefsXBWFVIyOXca",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:09.435Z"),
        updatedAt: new Date("2025-02-20T18:33:09.435Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 6,
        email: "newuser6@example.com",
        password: "$2b$10$yRtMNgdEW/2B9eP8htxBpe7N6FWKI3ct..xL.lebP3aIdp4d2zaae",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:30.927Z"),
        updatedAt: new Date("2025-02-20T18:33:30.927Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 7,
        email: "newuser7@example.com",
        password: "$2b$10$VNdEbGulceUYMdyRwp7y3ediv3PjYnbsldNbrt2fdfRgIB6Ysbk36",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:43.955Z"),
        updatedAt: new Date("2025-02-20T18:33:43.955Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 8,
        email: "newuser8@example.com",
        password: "$2b$10$SReITX9laTa8QLWAbLvdUeu4SM9DC8SUiaSBvaZDfv64O3CEwMJ9G",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:49.345Z"),
        updatedAt: new Date("2025-02-20T18:33:49.345Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 9,
        email: "newuser9@example.com",
        password: "$2b$10$RxxZvXtDF4j9FuUUx0lpQOS2wWhlE0MI6zoA4LpqFbMFXWcsvNX8m",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:52.134Z"),
        updatedAt: new Date("2025-02-20T18:33:52.134Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 10,
        email: "newuser10@example.com",
        password: "$2b$10$fN7kB.OpWv/f7YAaDlW5uOyOHEJi2AUaee/g3wlP8k2z/iIR3qRZe",
        name: "New User",
        createdAt: new Date("2025-02-20T18:33:55.445Z"),
        updatedAt: new Date("2025-02-20T18:33:55.445Z"),
      },
    });

    await prisma.user.create({
      data: {
        id: 3,
        email: "newuser2@example.com",
        password: "$2b$10$3kuDnh2yNDpGvwPV8m9OKeELTS4ZJGgARL0u3sh5uH4mHdxj0JUfy",
        name: "Md. Fahim Bin Amin",
        createdAt: new Date("2025-02-20T18:05:03.888Z"),
        updatedAt: new Date("2025-02-26T13:33:38.556Z"),
      },
    });

    await prisma.product.create({
      data: {
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

    await prisma.product.create({
      data: {
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

    await prisma.product.create({
      data: {
        id: 432,
        ownerId: 2,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 495.29,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 433,
        ownerId: 2,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 505.06,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 434,
        ownerId: 2,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 581.08,
        rent: 62.11,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 435,
        ownerId: 2,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 635.64,
        rent: 67.56,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 436,
        ownerId: 2,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 761.77,
        rent: 80.18,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 437,
        ownerId: 2,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 796.49,
        rent: 83.65,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 438,
        ownerId: 2,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 818.59,
        rent: 85.86,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 439,
        ownerId: 2,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 836.82,
        rent: 87.68,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 440,
        ownerId: 2,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 923,
        rent: 96.3,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 442,
        ownerId: 3,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 51.68,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 446,
        ownerId: 3,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 267.25,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 448,
        ownerId: 3,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 365.85,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 449,
        ownerId: 3,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 416.42,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 450,
        ownerId: 3,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 513.22,
        rent: 55.32,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 451,
        ownerId: 3,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 641.58,
        rent: 68.16,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 452,
        ownerId: 3,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 686.43,
        rent: 72.64,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 453,
        ownerId: 3,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 735.27,
        rent: 77.53,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 454,
        ownerId: 3,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 762.57,
        rent: 80.26,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 455,
        ownerId: 3,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 827.78,
        rent: 86.78,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 456,
        ownerId: 3,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 897.16,
        rent: 93.72,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 457,
        ownerId: 3,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 899.13,
        rent: 93.91,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 458,
        ownerId: 3,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 976.85,
        rent: 101.69,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 459,
        ownerId: 3,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 994.88,
        rent: 103.49,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 460,
        ownerId: 3,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 998.33,
        rent: 103.83,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 461,
        ownerId: 4,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 114.93,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 462,
        ownerId: 4,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 177.43,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 463,
        ownerId: 4,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 242.56,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 464,
        ownerId: 4,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 248.54,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 465,
        ownerId: 4,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 447.65,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 466,
        ownerId: 4,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 525.53,
        rent: 56.55,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 467,
        ownerId: 4,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 704.3,
        rent: 74.43,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 468,
        ownerId: 4,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 733.42,
        rent: 77.34,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 469,
        ownerId: 4,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 764.28,
        rent: 80.43,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 470,
        ownerId: 4,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 790.76,
        rent: 83.08,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 472,
        ownerId: 4,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 846.95,
        rent: 88.7,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 473,
        ownerId: 4,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 851.71,
        rent: 89.17,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 474,
        ownerId: 4,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 858.81,
        rent: 89.88,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 475,
        ownerId: 4,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 867.78,
        rent: 90.78,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 477,
        ownerId: 4,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 907.72,
        rent: 94.77,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 478,
        ownerId: 4,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 913.6,
        rent: 95.36,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 479,
        ownerId: 4,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 964.35,
        rent: 100.43,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 480,
        ownerId: 4,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 973.82,
        rent: 101.38,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 481,
        ownerId: 5,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 91.21,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 482,
        ownerId: 5,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 107.06,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 483,
        ownerId: 5,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 208.11,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 484,
        ownerId: 5,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 301.9,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 476,
        ownerId: 4,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 874.67,
        rent: 91.47,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-24T18:37:08.632Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 485,
        ownerId: 5,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 342.18,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-24T18:39:39.947Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 487,
        ownerId: 5,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 415.89,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-24T18:50:13.390Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 486,
        ownerId: 5,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 357,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-24T18:52:00.895Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 488,
        ownerId: 5,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 419.67,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 489,
        ownerId: 5,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 468.17,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 490,
        ownerId: 5,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 502.45,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 491,
        ownerId: 5,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 531.79,
        rent: 57.18,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 492,
        ownerId: 5,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 634.8,
        rent: 67.48,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 493,
        ownerId: 5,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 689.86,
        rent: 72.99,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 494,
        ownerId: 5,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 704.54,
        rent: 74.45,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 495,
        ownerId: 5,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 730.37,
        rent: 77.04,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 496,
        ownerId: 5,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 735.59,
        rent: 77.56,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 497,
        ownerId: 5,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 805.46,
        rent: 84.55,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 498,
        ownerId: 5,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 941.58,
        rent: 98.16,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 499,
        ownerId: 5,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 963.48,
        rent: 100.35,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 500,
        ownerId: 5,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 964.13,
        rent: 100.41,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 501,
        ownerId: 6,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 62.93,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 502,
        ownerId: 6,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 126.5,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 503,
        ownerId: 6,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 172.53,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 504,
        ownerId: 6,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 253.63,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 505,
        ownerId: 6,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 273.56,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 506,
        ownerId: 6,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 326.17,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 507,
        ownerId: 6,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 339.25,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 508,
        ownerId: 6,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 366.77,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 509,
        ownerId: 6,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 438.19,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 510,
        ownerId: 6,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 478.46,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 511,
        ownerId: 6,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 493.32,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 512,
        ownerId: 6,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 548.77,
        rent: 58.88,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 513,
        ownerId: 6,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 570.35,
        rent: 61.03,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 514,
        ownerId: 6,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 590.84,
        rent: 63.08,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 515,
        ownerId: 6,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 645.92,
        rent: 68.59,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 516,
        ownerId: 6,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 715.72,
        rent: 75.57,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 517,
        ownerId: 6,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 777.17,
        rent: 81.72,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 519,
        ownerId: 6,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 967.94,
        rent: 100.79,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 520,
        ownerId: 6,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 992.86,
        rent: 103.29,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 521,
        ownerId: 7,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 76.5,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 522,
        ownerId: 7,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 78.32,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 523,
        ownerId: 7,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 131.51,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 524,
        ownerId: 7,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 153.7,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 525,
        ownerId: 7,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 170,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 526,
        ownerId: 7,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 262.86,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 527,
        ownerId: 7,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 300.29,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 529,
        ownerId: 7,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 353.12,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 530,
        ownerId: 7,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 400.46,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 531,
        ownerId: 7,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 409.84,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 534,
        ownerId: 7,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 475.02,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 535,
        ownerId: 7,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 507.75,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 536,
        ownerId: 7,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 539.69,
        rent: 57.97,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 537,
        ownerId: 7,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 584.61,
        rent: 62.46,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 538,
        ownerId: 7,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 647.29,
        rent: 68.73,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 539,
        ownerId: 7,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 709.45,
        rent: 74.94,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 541,
        ownerId: 8,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 81.11,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 545,
        ownerId: 8,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 313.92,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 546,
        ownerId: 8,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 343.23,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 532,
        ownerId: 7,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 422.2,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-24T18:51:01.219Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 528,
        ownerId: 7,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 324.83,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-24T18:52:04.135Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 533,
        ownerId: 7,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 423.55,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-25T21:21:45.474Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 543,
        ownerId: 8,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 219.34,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-26T16:18:52.287Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 611,
        ownerId: 1,
        name: "New Product",
        category: "Electronics",
        price: 299.99,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-26T16:28:54.490Z"),
        updatedAt: new Date("2025-02-26T16:28:54.490Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 540,
        ownerId: 3,
        name: "Smartwatch",
        category: "ELECTRONICS",
        price: 99.99,
        rent: 9.99,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-26T17:18:08.162Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 544,
        ownerId: 3,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 231.09,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-26T17:31:19.272Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 401,
        ownerId: 1,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 93,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 403,
        ownerId: 1,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 217.04,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 404,
        ownerId: 1,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 240.71,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 405,
        ownerId: 1,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 295.84,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 406,
        ownerId: 1,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 312.39,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 407,
        ownerId: 1,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 348.88,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 408,
        ownerId: 1,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 419.34,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 409,
        ownerId: 1,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 434.25,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 410,
        ownerId: 1,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 494.86,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 411,
        ownerId: 1,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 575.18,
        rent: 61.52,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 412,
        ownerId: 1,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 598.55,
        rent: 63.85,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 413,
        ownerId: 1,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 616.14,
        rent: 65.61,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 414,
        ownerId: 1,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 659.76,
        rent: 69.98,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 415,
        ownerId: 1,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 729.95,
        rent: 76.99,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 416,
        ownerId: 1,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 756.52,
        rent: 79.65,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 417,
        ownerId: 1,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 787.01,
        rent: 82.7,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 418,
        ownerId: 1,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 881.21,
        rent: 92.12,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 419,
        ownerId: 1,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 928.06,
        rent: 96.81,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 420,
        ownerId: 1,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 964.66,
        rent: 100.47,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 421,
        ownerId: 2,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 47.37,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 422,
        ownerId: 2,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 76.17,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 423,
        ownerId: 2,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 85.58,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 424,
        ownerId: 2,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 113.16,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 425,
        ownerId: 2,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 197.47,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 426,
        ownerId: 2,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 228.96,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 427,
        ownerId: 2,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 297.94,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 428,
        ownerId: 2,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 357.44,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 429,
        ownerId: 2,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 387.75,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 601,
        ownerId: 3,
        name: "new test product",
        category: "ELECTRONICS",
        price: 22,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-21T16:40:01.786Z"),
        updatedAt: new Date("2025-02-21T16:40:01.786Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 609,
        ownerId: 1,
        name: "New Product",
        category: "Electronics",
        price: 299.99,
        rent: 29.99,
        rentedTo: null,
        createdAt: new Date("2025-02-24T18:11:59.335Z"),
        updatedAt: new Date("2025-02-24T18:11:59.335Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 612,
        ownerId: 1,
        name: "New Product",
        category: "Electronics",
        price: 299.99,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-26T16:51:52.607Z"),
        updatedAt: new Date("2025-02-26T16:51:52.607Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 402,
        ownerId: 3,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 169.72,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-26T17:22:03.345Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 201,
        ownerId: 3,
        name: "New Product 1",
        category: "ELECTRONICS",
        price: 24.61,
        rent: 15,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-26T17:39:10.967Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 602,
        ownerId: 3,
        name: "Smart Watch",
        category: "ELECTRONICS",
        price: 25,
        rent: 12,
        rentedTo: null,
        createdAt: new Date("2025-02-21T16:46:28.676Z"),
        updatedAt: new Date("2025-02-21T16:46:28.676Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 518,
        ownerId: 6,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 912.22,
        rent: 95.22,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-24T18:50:16.640Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 209,
        ownerId: 1,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 459.03,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-25T18:28:17.156Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 272,
        ownerId: 4,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 474.68,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-26T16:17:15.219Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 317,
        ownerId: 3,
        name: "Product 17",
        category: "TOYS",
        price: 951.08,
        rent: 99.11,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-26T17:22:44.090Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 603,
        ownerId: 3,
        name: "GPU",
        category: "ELECTRONICS",
        price: 300,
        rent: 100,
        rentedTo: null,
        createdAt: new Date("2025-02-21T16:56:27.451Z"),
        updatedAt: new Date("2025-02-21T16:56:27.451Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 202,
        ownerId: 3,
        name: "Smartwatch",
        category: "ELECTRONICS",
        price: 99.99,
        rent: 9.99,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-26T17:39:25.874Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 604,
        ownerId: 3,
        name: "Table",
        category: "FURNITURE",
        price: 20,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-21T17:05:44.436Z"),
        updatedAt: new Date("2025-02-21T17:05:44.436Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 605,
        ownerId: 3,
        name: "AMD RX 550",
        category: "ELECTRONICS",
        price: 50,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-21T17:08:09.226Z"),
        updatedAt: new Date("2025-02-21T17:08:09.226Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 542,
        ownerId: 8,
        name: "Smartwatch",
        category: "ELECTRONICS",
        price: 99.99,
        rent: 9.99,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-26T16:28:04.793Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 606,
        ownerId: 3,
        name: "Chair",
        category: "FURNITURE",
        price: 30,
        rent: 10,
        rentedTo: null,
        createdAt: new Date("2025-02-21T17:17:55.909Z"),
        updatedAt: new Date("2025-02-21T17:17:55.909Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 607,
        ownerId: 3,
        name: "GPU 4090",
        category: "ELECTRONICS",
        price: 450,
        rent: 200,
        rentedTo: null,
        createdAt: new Date("2025-02-21T17:18:50.709Z"),
        updatedAt: new Date("2025-02-21T17:18:50.709Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 547,
        ownerId: 8,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 349.32,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 548,
        ownerId: 8,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 396.11,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 549,
        ownerId: 8,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 496.52,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 550,
        ownerId: 8,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 544.86,
        rent: 58.49,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 551,
        ownerId: 8,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 562.32,
        rent: 60.23,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 552,
        ownerId: 8,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 585.29,
        rent: 62.53,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 553,
        ownerId: 8,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 713.08,
        rent: 75.31,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 554,
        ownerId: 8,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 808.2,
        rent: 84.82,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 555,
        ownerId: 8,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 832.25,
        rent: 87.22,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 556,
        ownerId: 8,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 844.73,
        rent: 88.47,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 557,
        ownerId: 8,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 893.83,
        rent: 93.38,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 558,
        ownerId: 8,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 920.55,
        rent: 96.05,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 559,
        ownerId: 8,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 952.42,
        rent: 99.24,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 560,
        ownerId: 8,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 1002.74,
        rent: 104.27,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 561,
        ownerId: 9,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 66.78,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 562,
        ownerId: 9,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 168.19,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 563,
        ownerId: 9,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 327.67,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 564,
        ownerId: 9,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 368.41,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 565,
        ownerId: 9,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 370.83,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 566,
        ownerId: 9,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 454.69,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 567,
        ownerId: 9,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 464.28,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 568,
        ownerId: 9,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 606.2,
        rent: 64.62,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 569,
        ownerId: 9,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 614.5,
        rent: 65.45,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 570,
        ownerId: 9,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 632.19,
        rent: 67.22,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 571,
        ownerId: 9,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 649.53,
        rent: 68.95,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 572,
        ownerId: 9,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 723.56,
        rent: 76.36,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 573,
        ownerId: 9,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 756.21,
        rent: 79.62,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 574,
        ownerId: 9,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 769.65,
        rent: 80.97,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 575,
        ownerId: 9,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 772.74,
        rent: 81.27,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 576,
        ownerId: 9,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 797.55,
        rent: 83.75,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 577,
        ownerId: 9,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 825.76,
        rent: 86.58,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 578,
        ownerId: 9,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 876.44,
        rent: 91.64,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 579,
        ownerId: 9,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 924.45,
        rent: 96.45,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 580,
        ownerId: 9,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 961.68,
        rent: 100.17,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 581,
        ownerId: 10,
        name: "Product 1",
        category: "HOMEAPPLIANCES",
        price: 21.08,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 582,
        ownerId: 10,
        name: "Product 2",
        category: "HOMEAPPLIANCES",
        price: 106.64,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 583,
        ownerId: 10,
        name: "Product 3",
        category: "HOMEAPPLIANCES",
        price: 116.55,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 584,
        ownerId: 10,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 150.17,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 585,
        ownerId: 10,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 214.07,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 586,
        ownerId: 10,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 276.06,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 587,
        ownerId: 10,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 354.73,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 588,
        ownerId: 10,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 413.93,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 589,
        ownerId: 10,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 425.28,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 590,
        ownerId: 10,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 441.73,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 591,
        ownerId: 10,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 451.22,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 592,
        ownerId: 10,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 582.43,
        rent: 62.24,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 593,
        ownerId: 10,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 735.22,
        rent: 77.52,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 594,
        ownerId: 10,
        name: "Product 14",
        category: "HOMEAPPLIANCES",
        price: 742.88,
        rent: 78.29,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 595,
        ownerId: 10,
        name: "Product 15",
        category: "HOMEAPPLIANCES",
        price: 776.08,
        rent: 81.61,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 596,
        ownerId: 10,
        name: "Product 16",
        category: "HOMEAPPLIANCES",
        price: 853.95,
        rent: 89.39,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 597,
        ownerId: 10,
        name: "Product 17",
        category: "HOMEAPPLIANCES",
        price: 863.97,
        rent: 90.4,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 598,
        ownerId: 10,
        name: "Product 18",
        category: "HOMEAPPLIANCES",
        price: 874.86,
        rent: 91.49,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 599,
        ownerId: 10,
        name: "Product 19",
        category: "HOMEAPPLIANCES",
        price: 940.36,
        rent: 98.04,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 600,
        ownerId: 10,
        name: "Product 20",
        category: "HOMEAPPLIANCES",
        price: 960.01,
        rent: 100,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:42:53.806Z"),
        updatedAt: new Date("2025-02-20T18:42:53.806Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 203,
        ownerId: 1,
        name: "Product 3",
        category: "FURNITURE",
        price: 204.03,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-26T13:52:00.312Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 205,
        ownerId: 1,
        name: "Product 5",
        category: "FURNITURE",
        price: 316.19,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-26T17:39:31.465Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 204,
        ownerId: 1,
        name: "Product 4",
        category: "FURNITURE",
        price: 260.58,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-25T18:28:58.187Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 207,
        ownerId: 1,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 407.58,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-25T18:29:07.365Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 208,
        ownerId: 1,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 453.57,
        rent: null,
        rentedTo: null,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-25T18:29:10.654Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 206,
        ownerId: 1,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 343.99,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-25T20:22:37.866Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 210,
        ownerId: 1,
        name: "Product 10",
        category: "SPORTING GOODS",
        price: 520.34,
        rent: 56.03,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 211,
        ownerId: 1,
        name: "Product 11",
        category: "SPORTING GOODS",
        price: 573.28,
        rent: 61.33,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 212,
        ownerId: 1,
        name: "Product 12",
        category: "SPORTING GOODS",
        price: 605.98,
        rent: 64.6,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 213,
        ownerId: 1,
        name: "Product 13",
        category: "SPORTING GOODS",
        price: 613.98,
        rent: 65.4,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 214,
        ownerId: 1,
        name: "Product 14",
        category: "OUTDOOR",
        price: 693.85,
        rent: 73.38,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 215,
        ownerId: 1,
        name: "Product 15",
        category: "OUTDOOR",
        price: 753.44,
        rent: 79.34,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 216,
        ownerId: 1,
        name: "Product 16",
        category: "TOYS",
        price: 851.78,
        rent: 89.18,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 217,
        ownerId: 1,
        name: "Product 17",
        category: "TOYS",
        price: 880.95,
        rent: 92.1,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 218,
        ownerId: 1,
        name: "Product 18",
        category: "TOYS",
        price: 885.65,
        rent: 92.56,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 219,
        ownerId: 1,
        name: "Product 19",
        category: "TOYS",
        price: 933.15,
        rent: 97.32,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 220,
        ownerId: 1,
        name: "Product 20",
        category: "TOYS",
        price: 943.74,
        rent: 98.37,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 221,
        ownerId: 2,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 64.22,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 222,
        ownerId: 2,
        name: "Product 2",
        category: "ELECTRONICS",
        price: 88.06,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 223,
        ownerId: 2,
        name: "Product 3",
        category: "ELECTRONICS",
        price: 137.4,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 224,
        ownerId: 2,
        name: "Product 4",
        category: "ELECTRONICS",
        price: 159.4,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 225,
        ownerId: 2,
        name: "Product 5",
        category: "FURNITURE",
        price: 220.67,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 226,
        ownerId: 2,
        name: "Product 6",
        category: "FURNITURE",
        price: 302.8,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 227,
        ownerId: 2,
        name: "Product 7",
        category: "FURNITURE",
        price: 319.19,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 228,
        ownerId: 2,
        name: "Product 8",
        category: "FURNITURE",
        price: 319.58,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 229,
        ownerId: 2,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 372.29,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 230,
        ownerId: 2,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 460.97,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 231,
        ownerId: 2,
        name: "Product 11",
        category: "SPORTING GOODS",
        price: 552.04,
        rent: 59.2,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 232,
        ownerId: 2,
        name: "Product 12",
        category: "SPORTING GOODS",
        price: 598.16,
        rent: 63.82,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 233,
        ownerId: 2,
        name: "Product 13",
        category: "SPORTING GOODS",
        price: 600.38,
        rent: 64.04,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 234,
        ownerId: 2,
        name: "Product 14",
        category: "SPORTING GOODS",
        price: 623.21,
        rent: 66.32,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 235,
        ownerId: 2,
        name: "Product 15",
        category: "OUTDOOR",
        price: 694.84,
        rent: 73.48,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 236,
        ownerId: 2,
        name: "Product 16",
        category: "OUTDOOR",
        price: 787.98,
        rent: 82.8,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 237,
        ownerId: 2,
        name: "Product 17",
        category: "TOYS",
        price: 856.69,
        rent: 89.67,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 238,
        ownerId: 2,
        name: "Product 18",
        category: "TOYS",
        price: 863.02,
        rent: 90.3,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 239,
        ownerId: 2,
        name: "Product 19",
        category: "TOYS",
        price: 885.11,
        rent: 92.51,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 240,
        ownerId: 2,
        name: "Product 20",
        category: "TOYS",
        price: 973.89,
        rent: 101.39,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 243,
        ownerId: 3,
        name: "Product 3",
        category: "ELECTRONICS",
        price: 72.89,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 244,
        ownerId: 3,
        name: "Product 4",
        category: "ELECTRONICS",
        price: 79.65,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 245,
        ownerId: 3,
        name: "Product 5",
        category: "ELECTRONICS",
        price: 87.81,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 246,
        ownerId: 3,
        name: "Product 6",
        category: "ELECTRONICS",
        price: 106.24,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 247,
        ownerId: 3,
        name: "Product 7",
        category: "ELECTRONICS",
        price: 152.16,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 248,
        ownerId: 3,
        name: "Product 8",
        category: "FURNITURE",
        price: 185,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 249,
        ownerId: 3,
        name: "Product 9",
        category: "FURNITURE",
        price: 187.13,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 250,
        ownerId: 3,
        name: "Product 10",
        category: "FURNITURE",
        price: 198.01,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 251,
        ownerId: 3,
        name: "Product 11",
        category: "FURNITURE",
        price: 202.25,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 252,
        ownerId: 3,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 448.01,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 253,
        ownerId: 3,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 457.88,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 241,
        ownerId: 3,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 29.45,
        rent: 20,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-25T21:05:32.769Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 242,
        ownerId: 3,
        name: "Chair",
        category: "FURNITURE",
        price: 40,
        rent: 25,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-25T20:49:26.372Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 254,
        ownerId: 3,
        name: "Product 14",
        category: "SPORTING GOODS",
        price: 544.69,
        rent: 58.47,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 255,
        ownerId: 3,
        name: "Product 15",
        category: "SPORTING GOODS",
        price: 578.82,
        rent: 61.88,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 256,
        ownerId: 3,
        name: "Product 16",
        category: "SPORTING GOODS",
        price: 643.19,
        rent: 68.32,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 257,
        ownerId: 3,
        name: "Product 17",
        category: "OUTDOOR",
        price: 698.43,
        rent: 73.84,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 258,
        ownerId: 3,
        name: "Product 18",
        category: "OUTDOOR",
        price: 706.88,
        rent: 74.69,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 259,
        ownerId: 3,
        name: "Product 19",
        category: "OUTDOOR",
        price: 837.77,
        rent: 87.78,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 260,
        ownerId: 3,
        name: "Product 20",
        category: "TOYS",
        price: 1008.79,
        rent: 104.88,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 261,
        ownerId: 4,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 95.21,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 262,
        ownerId: 4,
        name: "Product 2",
        category: "ELECTRONICS",
        price: 106.18,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 263,
        ownerId: 4,
        name: "Product 3",
        category: "FURNITURE",
        price: 220.76,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 264,
        ownerId: 4,
        name: "Product 4",
        category: "FURNITURE",
        price: 245.3,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 265,
        ownerId: 4,
        name: "Product 5",
        category: "FURNITURE",
        price: 260.76,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 266,
        ownerId: 4,
        name: "Product 6",
        category: "FURNITURE",
        price: 276.76,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 267,
        ownerId: 4,
        name: "Product 7",
        category: "FURNITURE",
        price: 285.07,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 268,
        ownerId: 4,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 353.78,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 269,
        ownerId: 4,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 368.14,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 270,
        ownerId: 4,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 403.75,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 271,
        ownerId: 4,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 466.97,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 273,
        ownerId: 4,
        name: "Product 13",
        category: "HOMEAPPLIANCES",
        price: 474.79,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 274,
        ownerId: 4,
        name: "Product 14",
        category: "SPORTING GOODS",
        price: 609.62,
        rent: 64.96,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 275,
        ownerId: 4,
        name: "Product 15",
        category: "SPORTING GOODS",
        price: 657.99,
        rent: 69.8,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 276,
        ownerId: 4,
        name: "Product 16",
        category: "OUTDOOR",
        price: 688.58,
        rent: 72.86,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 277,
        ownerId: 4,
        name: "Product 17",
        category: "OUTDOOR",
        price: 776.27,
        rent: 81.63,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 278,
        ownerId: 4,
        name: "Product 18",
        category: "OUTDOOR",
        price: 819.32,
        rent: 85.93,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 279,
        ownerId: 4,
        name: "Product 19",
        category: "TOYS",
        price: 896.23,
        rent: 93.62,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 280,
        ownerId: 4,
        name: "Product 20",
        category: "TOYS",
        price: 899.04,
        rent: 93.9,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 281,
        ownerId: 5,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 21.4,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 282,
        ownerId: 5,
        name: "Product 2",
        category: "ELECTRONICS",
        price: 22.62,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 283,
        ownerId: 5,
        name: "Product 3",
        category: "FURNITURE",
        price: 231.16,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 284,
        ownerId: 5,
        name: "Product 4",
        category: "FURNITURE",
        price: 236.5,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 285,
        ownerId: 5,
        name: "Product 5",
        category: "FURNITURE",
        price: 260.5,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 286,
        ownerId: 5,
        name: "Product 6",
        category: "FURNITURE",
        price: 324.97,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 287,
        ownerId: 5,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 423.78,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 288,
        ownerId: 5,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 486.54,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 289,
        ownerId: 5,
        name: "Product 9",
        category: "SPORTING GOODS",
        price: 553.39,
        rent: 59.34,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 290,
        ownerId: 5,
        name: "Product 10",
        category: "SPORTING GOODS",
        price: 614.26,
        rent: 65.43,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 291,
        ownerId: 5,
        name: "Product 11",
        category: "OUTDOOR",
        price: 701.93,
        rent: 74.19,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 292,
        ownerId: 5,
        name: "Product 12",
        category: "OUTDOOR",
        price: 705.93,
        rent: 74.59,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 293,
        ownerId: 5,
        name: "Product 13",
        category: "OUTDOOR",
        price: 710.86,
        rent: 75.09,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 294,
        ownerId: 5,
        name: "Product 14",
        category: "OUTDOOR",
        price: 717.92,
        rent: 75.79,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 295,
        ownerId: 5,
        name: "Product 15",
        category: "OUTDOOR",
        price: 719.62,
        rent: 75.96,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 296,
        ownerId: 5,
        name: "Product 16",
        category: "OUTDOOR",
        price: 744.24,
        rent: 78.42,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 297,
        ownerId: 5,
        name: "Product 17",
        category: "OUTDOOR",
        price: 764.37,
        rent: 80.44,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 298,
        ownerId: 5,
        name: "Product 18",
        category: "OUTDOOR",
        price: 783.15,
        rent: 82.32,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 299,
        ownerId: 5,
        name: "Product 19",
        category: "TOYS",
        price: 890.1,
        rent: 93.01,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 300,
        ownerId: 5,
        name: "Product 20",
        category: "TOYS",
        price: 995.07,
        rent: 103.51,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 301,
        ownerId: 6,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 88.03,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 302,
        ownerId: 6,
        name: "Product 2",
        category: "ELECTRONICS",
        price: 88.27,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 303,
        ownerId: 6,
        name: "Product 3",
        category: "FURNITURE",
        price: 230.38,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 304,
        ownerId: 6,
        name: "Product 4",
        category: "FURNITURE",
        price: 256.5,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 305,
        ownerId: 6,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 445.97,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 306,
        ownerId: 6,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 501.8,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 307,
        ownerId: 6,
        name: "Product 7",
        category: "SPORTING GOODS",
        price: 555.22,
        rent: 59.52,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 308,
        ownerId: 6,
        name: "Product 8",
        category: "SPORTING GOODS",
        price: 560.66,
        rent: 60.07,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 309,
        ownerId: 6,
        name: "Product 9",
        category: "SPORTING GOODS",
        price: 617.22,
        rent: 65.72,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 310,
        ownerId: 6,
        name: "Product 10",
        category: "SPORTING GOODS",
        price: 617.36,
        rent: 65.74,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 311,
        ownerId: 6,
        name: "Product 11",
        category: "OUTDOOR",
        price: 691.41,
        rent: 73.14,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 312,
        ownerId: 6,
        name: "Product 12",
        category: "OUTDOOR",
        price: 709.14,
        rent: 74.91,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 313,
        ownerId: 6,
        name: "Product 13",
        category: "OUTDOOR",
        price: 751.27,
        rent: 79.13,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 314,
        ownerId: 6,
        name: "Product 14",
        category: "OUTDOOR",
        price: 827.49,
        rent: 86.75,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 315,
        ownerId: 6,
        name: "Product 15",
        category: "TOYS",
        price: 900.02,
        rent: 94,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 316,
        ownerId: 6,
        name: "Product 16",
        category: "TOYS",
        price: 901.73,
        rent: 94.17,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 318,
        ownerId: 6,
        name: "Product 18",
        category: "TOYS",
        price: 951.52,
        rent: 99.15,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 319,
        ownerId: 6,
        name: "Product 19",
        category: "TOYS",
        price: 986.83,
        rent: 102.68,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 320,
        ownerId: 6,
        name: "Product 20",
        category: "TOYS",
        price: 994.86,
        rent: 103.49,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 321,
        ownerId: 7,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 36.15,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 322,
        ownerId: 7,
        name: "Product 2",
        category: "ELECTRONICS",
        price: 40.27,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 323,
        ownerId: 7,
        name: "Product 3",
        category: "FURNITURE",
        price: 211.74,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 324,
        ownerId: 7,
        name: "Product 4",
        category: "HOMEAPPLIANCES",
        price: 361.51,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 325,
        ownerId: 7,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 362.01,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 326,
        ownerId: 7,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 363.08,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 327,
        ownerId: 7,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 447.52,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 328,
        ownerId: 7,
        name: "Product 8",
        category: "HOMEAPPLIANCES",
        price: 466.18,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 329,
        ownerId: 7,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 478.3,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 330,
        ownerId: 7,
        name: "Product 10",
        category: "SPORTING GOODS",
        price: 638.73,
        rent: 67.87,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 331,
        ownerId: 7,
        name: "Product 11",
        category: "OUTDOOR",
        price: 696.77,
        rent: 73.68,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 332,
        ownerId: 7,
        name: "Product 12",
        category: "OUTDOOR",
        price: 782.58,
        rent: 82.26,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 333,
        ownerId: 7,
        name: "Product 13",
        category: "OUTDOOR",
        price: 798.97,
        rent: 83.9,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 334,
        ownerId: 7,
        name: "Product 14",
        category: "OUTDOOR",
        price: 814.72,
        rent: 85.47,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 335,
        ownerId: 7,
        name: "Product 15",
        category: "TOYS",
        price: 930.07,
        rent: 97.01,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 336,
        ownerId: 7,
        name: "Product 16",
        category: "TOYS",
        price: 941.21,
        rent: 98.12,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 337,
        ownerId: 7,
        name: "Product 17",
        category: "TOYS",
        price: 945.49,
        rent: 98.55,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 338,
        ownerId: 7,
        name: "Product 18",
        category: "TOYS",
        price: 952.26,
        rent: 99.23,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 339,
        ownerId: 7,
        name: "Product 19",
        category: "TOYS",
        price: 978.7,
        rent: 101.87,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 340,
        ownerId: 7,
        name: "Product 20",
        category: "TOYS",
        price: 982.41,
        rent: 102.24,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 341,
        ownerId: 8,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 46.98,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 342,
        ownerId: 8,
        name: "Product 2",
        category: "ELECTRONICS",
        price: 112.4,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 343,
        ownerId: 8,
        name: "Product 3",
        category: "FURNITURE",
        price: 207.99,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 344,
        ownerId: 8,
        name: "Product 4",
        category: "FURNITURE",
        price: 268.13,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 345,
        ownerId: 8,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 423.6,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 346,
        ownerId: 8,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 494.75,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 347,
        ownerId: 8,
        name: "Product 7",
        category: "SPORTING GOODS",
        price: 518.19,
        rent: 55.82,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 348,
        ownerId: 8,
        name: "Product 8",
        category: "SPORTING GOODS",
        price: 569.04,
        rent: 60.9,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 349,
        ownerId: 8,
        name: "Product 9",
        category: "SPORTING GOODS",
        price: 586.1,
        rent: 62.61,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 350,
        ownerId: 8,
        name: "Product 10",
        category: "SPORTING GOODS",
        price: 610.56,
        rent: 65.06,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 351,
        ownerId: 8,
        name: "Product 11",
        category: "OUTDOOR",
        price: 679.12,
        rent: 71.91,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 352,
        ownerId: 8,
        name: "Product 12",
        category: "OUTDOOR",
        price: 682.06,
        rent: 72.21,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 353,
        ownerId: 8,
        name: "Product 13",
        category: "OUTDOOR",
        price: 700.91,
        rent: 74.09,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 354,
        ownerId: 8,
        name: "Product 14",
        category: "OUTDOOR",
        price: 785.23,
        rent: 82.52,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 355,
        ownerId: 8,
        name: "Product 15",
        category: "OUTDOOR",
        price: 836.53,
        rent: 87.65,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 356,
        ownerId: 8,
        name: "Product 16",
        category: "TOYS",
        price: 857.41,
        rent: 89.74,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 357,
        ownerId: 8,
        name: "Product 17",
        category: "TOYS",
        price: 879.89,
        rent: 91.99,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 358,
        ownerId: 8,
        name: "Product 18",
        category: "TOYS",
        price: 884,
        rent: 92.4,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 359,
        ownerId: 8,
        name: "Product 19",
        category: "TOYS",
        price: 916.13,
        rent: 95.61,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 360,
        ownerId: 8,
        name: "Product 20",
        category: "TOYS",
        price: 958.3,
        rent: 99.83,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 361,
        ownerId: 9,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 57.04,
        rent: null,
        rentedTo: 10,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 362,
        ownerId: 9,
        name: "Product 2",
        category: "ELECTRONICS",
        price: 81.97,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 363,
        ownerId: 9,
        name: "Product 3",
        category: "ELECTRONICS",
        price: 107.87,
        rent: null,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 364,
        ownerId: 9,
        name: "Product 4",
        category: "ELECTRONICS",
        price: 163.68,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 365,
        ownerId: 9,
        name: "Product 5",
        category: "FURNITURE",
        price: 197.99,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 366,
        ownerId: 9,
        name: "Product 6",
        category: "FURNITURE",
        price: 305.53,
        rent: null,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 367,
        ownerId: 9,
        name: "Product 7",
        category: "FURNITURE",
        price: 318.76,
        rent: null,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 368,
        ownerId: 9,
        name: "Product 8",
        category: "FURNITURE",
        price: 338.31,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 369,
        ownerId: 9,
        name: "Product 9",
        category: "HOMEAPPLIANCES",
        price: 407.14,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 370,
        ownerId: 9,
        name: "Product 10",
        category: "HOMEAPPLIANCES",
        price: 466.94,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 371,
        ownerId: 9,
        name: "Product 11",
        category: "HOMEAPPLIANCES",
        price: 484.1,
        rent: null,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 372,
        ownerId: 9,
        name: "Product 12",
        category: "HOMEAPPLIANCES",
        price: 502.87,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 373,
        ownerId: 9,
        name: "Product 13",
        category: "SPORTING GOODS",
        price: 547.96,
        rent: 58.8,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 374,
        ownerId: 9,
        name: "Product 14",
        category: "OUTDOOR",
        price: 678.29,
        rent: 71.83,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 375,
        ownerId: 9,
        name: "Product 15",
        category: "OUTDOOR",
        price: 778.18,
        rent: 81.82,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 376,
        ownerId: 9,
        name: "Product 16",
        category: "OUTDOOR",
        price: 786.26,
        rent: 82.63,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 377,
        ownerId: 9,
        name: "Product 17",
        category: "OUTDOOR",
        price: 828.93,
        rent: 86.89,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 378,
        ownerId: 9,
        name: "Product 18",
        category: "TOYS",
        price: 900.73,
        rent: 94.07,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 379,
        ownerId: 9,
        name: "Product 19",
        category: "TOYS",
        price: 979.28,
        rent: 101.93,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 380,
        ownerId: 9,
        name: "Product 20",
        category: "TOYS",
        price: 1001.4,
        rent: 104.14,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 381,
        ownerId: 10,
        name: "Product 1",
        category: "ELECTRONICS",
        price: 29.28,
        rent: null,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 382,
        ownerId: 10,
        name: "Product 2",
        category: "FURNITURE",
        price: 216.07,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 383,
        ownerId: 10,
        name: "Product 3",
        category: "FURNITURE",
        price: 277.88,
        rent: null,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 384,
        ownerId: 10,
        name: "Product 4",
        category: "FURNITURE",
        price: 314.99,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 385,
        ownerId: 10,
        name: "Product 5",
        category: "HOMEAPPLIANCES",
        price: 416.52,
        rent: null,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 386,
        ownerId: 10,
        name: "Product 6",
        category: "HOMEAPPLIANCES",
        price: 426.97,
        rent: null,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 387,
        ownerId: 10,
        name: "Product 7",
        category: "HOMEAPPLIANCES",
        price: 485.2,
        rent: null,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 388,
        ownerId: 10,
        name: "Product 8",
        category: "SPORTING GOODS",
        price: 511.22,
        rent: 55.12,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 389,
        ownerId: 10,
        name: "Product 9",
        category: "SPORTING GOODS",
        price: 531.59,
        rent: 57.16,
        rentedTo: 3,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 390,
        ownerId: 10,
        name: "Product 10",
        category: "SPORTING GOODS",
        price: 553.96,
        rent: 59.4,
        rentedTo: 4,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 391,
        ownerId: 10,
        name: "Product 11",
        category: "SPORTING GOODS",
        price: 612.61,
        rent: 65.26,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 392,
        ownerId: 10,
        name: "Product 12",
        category: "SPORTING GOODS",
        price: 626.88,
        rent: 66.69,
        rentedTo: 2,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 393,
        ownerId: 10,
        name: "Product 13",
        category: "SPORTING GOODS",
        price: 638.16,
        rent: 67.82,
        rentedTo: 1,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 394,
        ownerId: 10,
        name: "Product 14",
        category: "SPORTING GOODS",
        price: 656.87,
        rent: 69.69,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 395,
        ownerId: 10,
        name: "Product 15",
        category: "OUTDOOR",
        price: 794.54,
        rent: 83.45,
        rentedTo: 5,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 396,
        ownerId: 10,
        name: "Product 16",
        category: "OUTDOOR",
        price: 818.75,
        rent: 85.88,
        rentedTo: 7,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 397,
        ownerId: 10,
        name: "Product 17",
        category: "OUTDOOR",
        price: 838.69,
        rent: 87.87,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 398,
        ownerId: 10,
        name: "Product 18",
        category: "TOYS",
        price: 878.25,
        rent: 91.82,
        rentedTo: 6,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 399,
        ownerId: 10,
        name: "Product 19",
        category: "TOYS",
        price: 933.84,
        rent: 97.38,
        rentedTo: 8,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });

    await prisma.product.create({
      data: {
        id: 400,
        ownerId: 10,
        name: "Product 20",
        category: "TOYS",
        price: 990.95,
        rent: 103.1,
        rentedTo: 9,
        createdAt: new Date("2025-02-20T18:38:50.394Z"),
        updatedAt: new Date("2025-02-20T18:38:50.394Z"),
      },
    });
