"use client";

import { ModalProps } from "@/types/ui";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  description,
}: ModalProps) => {
  // =========== Change =============
  const onChange = (open: boolean) => {
    if (!open) onClose();
  };

  // =========== Rendering =============
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
