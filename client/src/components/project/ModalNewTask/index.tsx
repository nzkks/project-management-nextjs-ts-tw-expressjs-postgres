import React from "react";

import Modal from "@/components/Modal";

type Props = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

const ModalNewTask = ({ id, isOpen, onClose }: Props) => {
  return (
    <Modal name="New Task" isOpen={isOpen} onClose={onClose}>
      New Task for project {id}
    </Modal>
  );
};

export default ModalNewTask;
