import { PrismaClient } from '../src/generated/prisma/client/index.js';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { description: 'Misterio' },
      { description: 'Fantasía' },
    ],
    skipDuplicates: true
  });

  console.log('Seed ejecutado correctamente.');
}

main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
