import React from "react";

import Header from "@/components/Header";

type Props = {};

const ProjectHeader = (props: Props) => {
  return (
    <div className="px-4 xl:px-6">
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header name="Project Name" />
      </div>

      {/* TABS */}
      <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center">
        <div className="flex flex-1 items-center gap-2 md:gap-4">
          Board view / List view / Timeline view / Table view
        </div>
        <div className="flex items-center gap-2">
          Filter button / Share button / Search Task input
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
