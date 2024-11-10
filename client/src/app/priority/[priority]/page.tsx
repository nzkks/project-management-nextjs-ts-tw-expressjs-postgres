"use client";

import React, { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import { List as ListIcon, Table as TableIcon } from "lucide-react";

import { Task, useGetTasksByUserIdQuery } from "@/state/api";
import Header from "@/components/Header";
import ListView from "@/components/project/ListView";
import TableView from "@/components/project/TableView";
// import ModalNewTask from "../project/ModalNewTask";

const Priority = () => {
  const [activeTab, setActiveTab] = useState("List");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  const params = useParams<{ tag: string; priority: string }>();
  const priority =
    params.priority.charAt(0).toUpperCase() + params.priority.slice(1);

  const userId = 2; // For now hard coding the userId. In the future, we can get the userId from the BE.
  const {
    data: tasks,
    error: tasksError,
    isLoading: tasksLoading,
  } = useGetTasksByUserIdQuery(userId || 0, {
    skip: userId === null, // While getting the userId dynamically from the BE, skip the query. Because the code runs to get the userId first. Before even received the userId, the query will try to run.
  });

  if (tasksLoading) return <div>Loading...</div>;
  if (tasksError || !tasks)
    return <div>An error occurred while fetching data</div>;

  const filteredTasks = tasks?.filter(
    (task: Task) => task.priority === priority,
  );

  return (
    <>
      <div className="px-4 xl:px-6">
        <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
          <Header name={`Priority marked as ${priority}`} />
        </div>

        {/* TABS */}
        <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center">
          <div className="flex flex-1 items-center gap-2 md:gap-4">
            <TabButton
              name="List"
              icon={<ListIcon className="h-5 w-5" />}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              name="Table"
              icon={<TableIcon className="h-5 w-5" />}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </div>
      <div>
        {activeTab === "List" && (
          <ListView
            tasks={filteredTasks}
            setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          />
        )}

        {activeTab === "Table" && (
          <TableView
            tasks={filteredTasks}
            setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          />
        )}
      </div>

      {/* <ModalNewTask
        id={id}
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
      /> */}
    </>
  );
};

type TabButtonProps = {
  name: string;
  icon: ReactNode;
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const TabButton = ({ name, icon, activeTab, setActiveTab }: TabButtonProps) => {
  const isActive = activeTab === name;

  return (
    <button
      className={`relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 ${
        isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : ""
      }`}
      onClick={() => setActiveTab(name)}
    >
      {icon}
      {name}
    </button>
  );
};

export default Priority;
