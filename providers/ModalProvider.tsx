"use client";

import React, { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }
  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
