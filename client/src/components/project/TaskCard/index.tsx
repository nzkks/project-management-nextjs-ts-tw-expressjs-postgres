import { Task } from "@/state/api";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return <div>{task ? task.title : "No task"}</div>;
};

export default TaskCard;
