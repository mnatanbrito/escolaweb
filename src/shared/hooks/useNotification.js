import {useToast} from '@chakra-ui/react'

const useNotification = () => {
  const toast = useToast()

  const success = ({
    title,
    description,
    duration = 2000,
    isClosable = true,
    onCloseComplete = () => null,
  }) => {
    toast({
      title,
      description,
      status: 'success',
      duration,
      isClosable,
      onCloseComplete,
    })
  }

  const error = ({
    title,
    description,
    duration = 2000,
    isClosable = true,
    onCloseComplete = () => null,
  }) => {
    toast({
      title,
      description,
      status: 'error',
      duration,
      isClosable,
      onCloseComplete,
    })
  }

  return {
    success,
    error,
  }
}

export default useNotification
