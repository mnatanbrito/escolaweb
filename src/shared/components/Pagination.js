import {Box, Button} from '@chakra-ui/react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

const Pagination = ({
  hasPrevious = false,
  hasNext = true,
  onPrevious,
  onNext,
}) => {
  return (
    <Box justifyContent="center" mt={5}>
      <Button
        colorScheme="blue"
        aria-label="Página anterior"
        variant="ghost"
        leftIcon={<FaArrowLeft />}
        onClick={onPrevious}
        title="Página anterior"
        disabled={!hasPrevious}
      >
        Página anterior
      </Button>

      <Button
        colorScheme="blue"
        aria-label="Próxima página"
        variant="ghost"
        leftIcon={<FaArrowRight />}
        onClick={onNext}
        title="Próxima página"
        disabled={!hasNext}
      >
        Próxima página
      </Button>
    </Box>
  )
}

export default Pagination
