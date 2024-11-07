import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const search = async (req: Request, res: Response): Promise<void> => {
  const { query } = req.query;
  if (!query || typeof query !== 'string') {
    res.status(400).json({ error: 'Query parameter is required and must be a string' });
    return;
  }

  const lowerCasedQuery = query.toLowerCase();

  try {
    const projects = await prisma.project.findMany({
      where: {
        OR: [
          { name: { contains: lowerCasedQuery as string, mode: 'insensitive' } },
          { description: { contains: lowerCasedQuery as string, mode: 'insensitive' } },
        ],
      },
    });

    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { title: { contains: lowerCasedQuery as string, mode: 'insensitive' } },
          { description: { contains: lowerCasedQuery as string, mode: 'insensitive' } },
        ],
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });

    const users = await prisma.user.findMany({
      where: {
        OR: [{ username: { contains: lowerCasedQuery as string, mode: 'insensitive' } }],
      },
    });

    res.status(201).json({ projects, tasks, users });
  } catch (error: any) {
    res.status(500).json({ message: `Error performing search: ${error.message}` });
  }
};
