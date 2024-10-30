import React from "react";

type Props = {
  params: { id: string };
};

const Project = ({ params: { id } }: Props) => {
  return <div className="dark:text-white">Project {id}</div>;
};

export default Project;
