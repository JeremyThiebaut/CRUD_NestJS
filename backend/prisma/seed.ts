import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: 'The Two Towers',
        description: 'The Journey Continues',
        author: 'J.R.R. Tolkien',
      },

      {
        title: 'The Return of the King',
        description: 'The Journey Ends',
        author: 'J.R.R. Tolkien',
      },

      {
        title: 'The Silmarillion',
        description: 'The Beginning of the End',
        author: 'J.R.R. Tolkien',
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
