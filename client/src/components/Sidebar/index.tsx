"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase as TimelineIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  Home as HomeIcon,
  LockIcon,
  LucideIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  Users as TeamIcon,
  X as CloseIcon,
} from "lucide-react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="fixed z-40 flex h-full flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black">
      <div className="flex size-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            My LIST
          </div>
          <button className="py-3">
            <CloseIcon className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
          </button>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          {/* Logo */}
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              My Team
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
        <nav className="z-10 w-full">
          <SidebarLink icon={HomeIcon} label="Home" href="/" />
          <SidebarLink icon={TimelineIcon} label="Timeline" href="/timeline" />
          <SidebarLink icon={SearchIcon} label="Search" href="/search" />
          <SidebarLink icon={SettingsIcon} label="Settings" href="/settings" />
          <SidebarLink icon={UserIcon} label="Users" href="/users" />
          <SidebarLink icon={TeamIcon} label="Teams" href="/teams" />
        </nav>

        {/* PROJECTS LINKS */}
        <button
          onClick={() => setShowProjects((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        >
          <span className="">Projects</span>
          {showProjects ? (
            <ChevronUpIcon className="size-5" />
          ) : (
            <ChevronDownIcon className="size-5" />
          )}
        </button>
        {/* PROJECTS LIST */}

        {/* PRIORITIES LINKS */}
        <button className="flex w-full items-center justify-between px-8 py-3 text-gray-500">
          <span className="">Priority</span>
          <ChevronDownIcon className="size-5" />
        </button>
      </div>
      <div className="z-10 mt-32 flex w-full flex-col items-center gap-4 bg-white px-8 py-4 md:hidden dark:bg-black">
        <div className="flex w-full items-center">
          <div className="align-center flex h-9 w-9 justify-center">
            <UserIcon className="h-6 w-6 cursor-pointer self-center rounded-full dark:text-white" />
          </div>
          <span className="mx-3 text-gray-800 dark:text-white">user name</span>
          <button className="self-start rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center justify-start gap-3 px-8 py-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700`}
      >
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
