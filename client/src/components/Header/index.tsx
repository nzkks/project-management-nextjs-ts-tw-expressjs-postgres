import React from "react";

type Props = {
  name: string;
};

const Header = ({ name }: Props) => {
  return (
    <div className="mb-5 w-full">
      <h1 className="text-2xl font-semibold dark:text-white">{name}</h1>
    </div>
  );
};

export default Header;
