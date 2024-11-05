import React from "react";
import { format } from "date-fns";

import { Project } from "@/state/api";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      <p>
        <strong>ID:</strong> {project.id}
      </p>
      <p>
        <strong>Name:</strong> {project.name}
      </p>
      <p>
        <strong>Description:</strong>{" "}
        {project.description || "No description provided"}
      </p>
      <p>
        <strong>Start Date:</strong>{" "}
        {project.startDate
          ? format(new Date(project.startDate), "P")
          : "Not set"}
      </p>
      <p>
        <strong>End Date:</strong>{" "}
        {project.endDate ? format(new Date(project.endDate), "P") : "Not set"}
      </p>
    </div>
  );
};

export default ProjectCard;
