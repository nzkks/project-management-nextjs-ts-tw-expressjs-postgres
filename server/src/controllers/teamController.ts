import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await prisma.team.findMany({
      include: {
        user: true,
      },
    });

    const teamsWithMembers = await Promise.all(
      teams.map(async team => {
        const productOwner = await prisma.user.findUnique({
          where: { userId: team.productOwnerUserId! },
          select: { username: true, profilePictureUrl: true },
        });

        const projectManager = await prisma.user.findUnique({
          where: { userId: team.projectManagerUserId! },
          select: { username: true, profilePictureUrl: true },
        });

        const teamMembers = await prisma.user.findMany({
          where: { teamId: team.id },
          select: { username: true, profilePictureUrl: true },
        });

        return {
          id: team.id,
          teamName: team.teamName,
          productOwner,
          projectManager,
          teamSize: teamMembers.length,
          teamMembers,
        };
      })
    );

    res.status(201).json(teamsWithMembers);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving teams: ${error.message}` });
  }
};
