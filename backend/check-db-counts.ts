import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function main() {
  try {
    const userCount = await prisma.user.count()
    const productCount = await prisma.product.count()

    const result = `Number of users in the database: ${userCount}\nNumber of products in the database: ${productCount}`
    fs.writeFileSync('db-counts.txt', result)
    
    console.log('Database counts written to db-counts.txt')
  } catch (error) {
    console.error('Error querying the database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
