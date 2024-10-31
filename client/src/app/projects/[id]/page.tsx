import React from "react";

import ProjectHeader from "@/components/project/ProjectHeader";

type Props = {
  params: { id: string };
};

const Project = ({ params: { id } }: Props) => {
  return (
    <div>
      <ProjectHeader />

      {/* tab content */}
    </div>
  );
};

export default Project;
