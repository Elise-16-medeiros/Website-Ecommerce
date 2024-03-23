"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../modal";

export default function StoreModal() {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Criar loja"
      description="Adicionar uma nova loja"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Criação da futura loja
    </Modal>
  );
}
