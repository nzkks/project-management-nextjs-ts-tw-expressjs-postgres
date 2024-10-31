import React from "react";

import { Task } from "@/state/api";
import TaskCard from "../TaskCard";

type Props = {
  tasks: Task[];
};

const ListView = ({ tasks }: Props) => {
  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">List View</div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks?.map((task: Task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListView;
