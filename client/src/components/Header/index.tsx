import React, { ReactNode } from "react";

type Props = {
  name: string;
  buttonComponent?: ReactNode;
  isSmallText?: boolean;
  isMargin?: boolean;
};

const Header = ({
  name,
  buttonComponent,
  isSmallText,
  isMargin = true,
}: Props) => {
  return (
    <div
      className={`${isMargin ? "mb-5" : ""} flex w-full items-center justify-between`}
    >
      <h1
        className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}
      >
        {name}
      </h1>

      {buttonComponent}
    </div>
  );
};

export default Header;
