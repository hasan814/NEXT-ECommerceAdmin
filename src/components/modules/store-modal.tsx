import { useStoreModal } from "@/hooks/use-store-modal";

import Modal from "@/components/ui/modal";

export const StoreModal = () => {
  // =========== Zustand =========
  const storeModal = useStoreModal();

  // =========== Rendering =========
  return (
    <Modal
      title="Create Store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      description="Add a new Store to Manage Products and Categories"
    >
      Future Create Store Form
    </Modal>
  );
};
