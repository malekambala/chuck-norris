import styles from "@/styles/Home.module.css";
import { PrismaClient } from "@prisma/client";

//create Prisma-Database Connection
export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const counts = await prisma.Count.findMany();

  return {
    props: {
      data: counts,
    },
  };
}

//Page for Footer
export default function Footer(data) {
  console.log(data);

  return <h1 className={styles.visitors}>Number of visitors: {data.name}</h1>;
}
