import React, { Dispatch, SetStateAction } from "react";

import { Task } from "@/state/api";
import TaskCard from "../TaskCard";
import Header from "@/components/Header";

type Props = {
  tasks: Task[];
  setIsModalNewTaskOpen: Dispatch<SetStateAction<boolean>>;
};

const ListView = ({ tasks, setIsModalNewTaskOpen }: Props) => {
  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="List View"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks?.map((task: Task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListView;
