import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Project {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: ["Projects"],
  endpoints: (build) => ({
    getProjects: build.query<Project[], void>({
      query: () => "projects", // "baseUrl/projects". Example: "http://localhost:8000/projects"
      providesTags: ["Projects"],
    }),
  }),
});

export const { useGetProjectsQuery } = api;
