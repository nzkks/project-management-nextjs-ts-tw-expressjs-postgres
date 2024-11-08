import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await prisma.user.findMany();

    const usersWithTeamName: User[] = await Promise.all(
      users.map(async user => {
        const team = await prisma.team.findUnique({
          where: { id: user.teamId! },
          select: { teamName: true },
        });
        return { ...user, teamName: team?.teamName };
      })
    );

    res.status(201).json(usersWithTeamName);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving users: ${error.message}` });
  }
};
