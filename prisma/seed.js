const { PrismaClient } = require("@prisma/client");
const { count } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.count.deleteMany();
    console.log("Deleted Counts");
    await prisma.count.createMany({
      data: count,
    });
    console.log("Counts are created");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

load();
