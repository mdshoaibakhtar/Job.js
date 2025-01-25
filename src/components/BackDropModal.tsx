import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Divider,
} from "@heroui/react";

// Define the props interface
interface BackDropModalProps {
    openModal: boolean;
    handleClose: () => void;
    title: string;
    size: any;
    content: any;
    footer: any;
}

export default function BackDropModal({ openModal, handleClose, title, content, footer, size }: BackDropModalProps) {
    return (
        <Modal backdrop="blur" isOpen={openModal} onClose={handleClose} size={size} scrollBehavior="inside" placement="center">
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                <Divider className="my-2" />
                <ModalBody>
                    {content}
                </ModalBody>
                <Divider className="my-2" />
                <ModalFooter>
                    {footer}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
