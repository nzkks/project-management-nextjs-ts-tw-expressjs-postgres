import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await prisma.team.findMany();
    res.status(201).json(teams);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving teams: ${error.message}` });
  }
};
