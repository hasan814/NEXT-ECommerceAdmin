"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage = () => {
  // =============== Zustand =============
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  // =============== Clerk =============
  const { userId } = useAuth();

  // =============== Effect =============
  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  // =============== Rendering =============
  if (userId) return <div className="p-4"></div>;
};

export default SetupPage;
