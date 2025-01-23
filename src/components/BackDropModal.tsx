import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";

// Define the props interface
interface BackDropModalProps {
    openModal: boolean;
    handleClose: () => void;
}

export default function BackDropModal({ openModal, handleClose }: BackDropModalProps) {
    return (
        <Modal backdrop="blur" isOpen={openModal} onClose={handleClose}>
            <ModalContent>
                {(handleClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Terms & Conditions</ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={handleClose}>
                                Agreed
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
