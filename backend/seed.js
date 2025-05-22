const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Clean existing data
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`

  // Seed demo users
  await prisma.user.createMany({
    data: [
      {
        email: 'demo@openfix.com',
        password: '$2a$10$examplehashedpassword', // bcrypt hash of 'demo123'
        role: 'USER'
      },
      {
        email: 'admin@openfix.com',
        password: '$2a$10$examplehashedadminpass', // bcrypt hash of 'admin123'
        role: 'ADMIN'
      }
    ]
  })

  // Seed cryptocurrencies
  await prisma.cryptocurrency.createMany({
    data: [
      { symbol: 'BTC', name: 'Bitcoin', currentPrice: 50000.00 },
      { symbol: 'ETH', name: 'Ethereum', currentPrice: 3000.00 },
      { symbol: 'USDT', name: 'Tether', currentPrice: 1.00 }
    ]
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })