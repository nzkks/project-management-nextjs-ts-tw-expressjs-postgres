import React from "react";

import Header from "@/components/Header";

const Timeline = () => {
  return (
    <div className="max-w-full p-8">
      <header className="mb-4 flex items-center justify-between">
        <Header name="Projects Timeline" />
      </header>

      <div className="overflow-hidden rounded-md bg-white shadow dark:bg-dark-secondary dark:text-white">
        <div className="timeline">Gantt Timeline</div>
      </div>
    </div>
  );
};

export default Timeline;
