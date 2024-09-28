"use client";

import { useEffect, useState } from "react";
import { StoreModal } from "@/components/modules/store-modal";

export const ModalProvider = () => {
  // =============== State ===================
  const [isMounted, setIsMounted] = useState(false);

  // =============== Effect ===================
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // =============== Rendreing ===================
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
