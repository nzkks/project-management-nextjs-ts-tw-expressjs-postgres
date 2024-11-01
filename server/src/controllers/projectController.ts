import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    res.status(201).json(projects);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving projects: ${error.message}` });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  const { projectId } = req.params;
  try {
    const project = await prisma.project.findUnique({ where: { id: Number(projectId) } });
    res.status(201).json(project);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving project: ${error.message}` });
  }
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const newProject = await prisma.project.create({ data: { name, description, startDate, endDate } });
    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(500).json({ message: `Error creating project: ${error.message}` });
  }
};
