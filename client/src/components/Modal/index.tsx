import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { X as CloseIcon } from "lucide-react";

import Header from "../Header";

type Props = {
  name: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ name, children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-dark-secondary">
        <Header
          name={name}
          buttonComponent={
            <button
              className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-primary text-white hover:bg-blue-600"
              onClick={onClose}
            >
              <CloseIcon size={18} />
            </button>
          }
          isSmallText
        />
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
