"use client";
import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <main>
      <div className="p-5">
        <h1>Root Page</h1>
      </div>
    </main>
  );
}
