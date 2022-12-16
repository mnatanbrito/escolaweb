import {useState} from 'react'

const usePaisForm = () => {
  const [formState, setFormState] = useState('table')

  const showTable = (pai) => {
    setFormState('table')
  }

  const showForm = () => {
    setFormState('form')
  }

  return {
    isTable: formState === 'table',
    showTable,
    showForm,
  }
}

export default usePaisForm
