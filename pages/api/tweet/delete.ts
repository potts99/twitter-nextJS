  
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {

  const tweet = await prisma.tweet.delete({
    where: { id: req.body.id },
  });
  res.json(tweet);
  return;
};