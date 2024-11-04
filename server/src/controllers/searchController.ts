import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const search = async (req: Request, res: Response): Promise<void> => {
  const { query } = req.query;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR: [{ title: { contains: query as string } }, { description: { contains: query as string } }],
      },
    });

    res.status(201).json({ tasks });
  } catch (error: any) {
    res.status(500).json({ message: `Error performing search: ${error.message}` });
  }
};
