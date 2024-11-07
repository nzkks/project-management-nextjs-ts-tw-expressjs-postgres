"use client";

import React from "react";
import Image from "next/image";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

import { useGetTeamsQuery, User } from "@/state/api";
import { useAppSelector } from "../redux";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import Header from "@/components/Header";

const CustomToolbar = () => (
  <GridToolbarContainer className="toolbar flex gap-2">
    <GridToolbarFilterButton />
    <GridToolbarExport />
  </GridToolbarContainer>
);

const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 200 },
  {
    field: "productOwner",
    headerName: "Product Owner",
    width: 150,
    renderCell: (params) => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-9 w-9">
          <Image
            src={`/${params.row.productOwner.profilePictureUrl}`}
            alt={params.row.productOwner.username}
            width={100}
            height={50}
            className="h-full rounded-full object-cover"
          />
        </div>
        <div className="ml-2">{params.row.productOwner.username}</div>
      </div>
    ),
  },
  {
    field: "projectManager",
    headerName: "Project Manager",
    width: 150,
    renderCell: (params) => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-9 w-9">
          <Image
            src={`/${params.row.projectManager.profilePictureUrl}`}
            alt={params.row.projectManager.username}
            width={100}
            height={50}
            className="h-full rounded-full object-cover"
          />
        </div>
        <div className="ml-2">{params.row.projectManager.username}</div>
      </div>
    ),
  },
  {
    field: "teamSize",
    headerName: "Team Size",
    width: 100,
  },
  {
    field: "teamMembers",
    headerName: "Team Members",
    width: 150,
    renderCell: (params) => {
      return (
        params.row.teamMembers.length > 0 && (
          <div className="mt-3 flex items-center justify-between">
            <div className="flex -space-x-[6px] overflow-hidden">
              {params.row.teamMembers.map((member: User, idx: number) => (
                <div key={idx} className="has-tooltip">
                  <span className="tooltip -mt-8 rounded bg-gray-100 p-1 shadow-lg dark:bg-black">
                    {member.username}
                  </span>
                  <Image
                    src={`/${member.profilePictureUrl}`}
                    alt={member.username}
                    width={30}
                    height={30}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary"
                  />
                </div>
              ))}
            </div>
          </div>
        )
      );
    },
  },
];

const Teams = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !teams) return <div>Error fetching teams</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Teams" />
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={teams || []}
          columns={columns}
          pagination
          slots={{
            toolbar: CustomToolbar,
          }}
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};

export default Teams;
