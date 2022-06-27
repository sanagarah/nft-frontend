import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export default function index({ isOpen, onClose, ownerName }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Owner is</ModalHeader>
        <ModalBody>{ownerName}</ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
