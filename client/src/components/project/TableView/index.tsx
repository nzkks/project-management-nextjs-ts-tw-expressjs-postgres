import React from "react";

import { Task } from "@/state/api";

type Props = {
  tasks: Task[];
};

const TableView = ({ tasks }: Props) => {
  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
      <div className="pt-5">Table View</div>

      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default TableView;
