import React from "react";

import ProjectHeader from "@/components/project/ProjectHeader";
import TableView from "@/components/project/TableView";

type Props = {
  params: { id: string };
};

const Project = ({ params: { id } }: Props) => {
  return (
    <div>
      <ProjectHeader />

      {/* tabs content */}
      <TableView />
    </div>
  );
};

export default Project;
