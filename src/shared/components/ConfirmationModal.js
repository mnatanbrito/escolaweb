import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

const ConfirmationModal = ({
  isOpen,
  data,
  title,
  message,
  confirmButtonText = 'Confirmar',
  cancelButtonText = 'Cancelar',
  onConfirm,
  onClose,
}) => {
  const onWrappedConfirm = () => {
    onConfirm && onConfirm(data)
    onClose && onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <HStack spacing="5px">
            <Button variant="ghost" colorScheme="red" onClick={onClose}>
              {cancelButtonText}
            </Button>
            <Button onClick={onWrappedConfirm} colorScheme="red" type="button">
              {confirmButtonText}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmationModal
