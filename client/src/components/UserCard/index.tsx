import React from "react";
import Image from "next/image";

import { User } from "@/state/api";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <div className="size-10">
          <Image
            src={`/${user.profilePictureUrl}`}
            alt={user.username}
            width={40}
            height={40}
            className="h-full rounded-full object-cover"
          />
        </div>
      )}
      <div className="ml-4 dark:text-white">
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
