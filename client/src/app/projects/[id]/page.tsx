"use client";

import React, { useState } from "react";

import { useGetTasksQuery } from "@/state/api";

import ProjectHeader from "@/components/project/ProjectHeader";
import TableView from "@/components/project/TableView";

type Props = {
  params: { id: string };
};

const Project = ({ params: { id } }: Props) => {
  const [activeTab, setActiveTab] = useState("Table");

  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error || !tasks) return <div>An error occurred while fetching tasks</div>;

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* tabs content */}
      {activeTab === "Table" && <TableView tasks={tasks} />}
    </div>
  );
};

export default Project;
