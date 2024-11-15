"use client";

import React, { useState } from "react";

import { useGetProjectByIdQuery, useGetTasksQuery } from "@/state/api";

import ProjectHeader from "@/components/project/ProjectHeader";
import TableView from "@/components/project/TableView";
import ListView from "@/components/project/ListView";
import TimelineView from "@/components/project/TimelineView";
import BoardView from "@/components/project/BoardView";
import ModalNewTask from "@/components/project/ModalNewTask";

type Props = {
  params: { id: string };
};

const Project = ({ params: { id } }: Props) => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  const {
    data: project,
    error: projectError,
    isLoading: projectLoading,
  } = useGetProjectByIdQuery({
    projectId: Number(id),
  });

  const {
    data: tasks,
    error: tasksError,
    isLoading: tasksLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (projectLoading || tasksLoading) return <div>Loading...</div>;
  if (projectError || tasksError || !tasks || !project)
    return <div>An error occurred while fetching data</div>;

  return (
    <>
      <div>
        <ProjectHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          project={project}
        />

        {/* tabs content */}
        {activeTab === "Board" && (
          <BoardView
            tasks={tasks}
            setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          />
        )}
        {activeTab === "List" && (
          <ListView
            tasks={tasks}
            setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          />
        )}
        {activeTab === "Timeline" && (
          <TimelineView
            tasks={tasks}
            setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          />
        )}
        {activeTab === "Table" && (
          <TableView
            tasks={tasks}
            setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          />
        )}
      </div>

      <ModalNewTask
        id={id}
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
      />
    </>
  );
};

export default Project;
