export interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    description: string;
    children?: React.ReactNode
}