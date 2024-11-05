"use client";

import React, { useState } from "react";
import { useDebounce } from "use-debounce";

import { useSearchQuery } from "@/state/api";
import Header from "@/components/Header";
import TaskCard from "@/components/project/TaskCard";
import ProjectCard from "@/components/project/ProjectCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useSearchQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm.length < 3 || debouncedSearchTerm.trim() === "",
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="p-8">
      <Header name="Search" />
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded border p-3 shadow"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {!isLoading && !isError && searchResults ? (
        <div className="p-5">
          <div>
            {searchResults.tasks && searchResults.tasks?.length > 0 && (
              <h2>Tasks</h2>
            )}
            {searchResults.tasks?.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
          <div>
            {searchResults.projects && searchResults.projects?.length > 0 && (
              <h2>Projects</h2>
            )}
            {searchResults.projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
