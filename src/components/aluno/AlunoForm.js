import {maskDateString} from '../../shared/utils/dates'
import InputField from '../../shared/components/InputField'

export default function AlunoForm({handleChange}) {
  return (
    <>
      <InputField name="nome" label="Nome:" onChange={handleChange} />

      <InputField
        name="dataNascimento"
        label="Data de Nascimento:"
        onChange={handleChange}
        maxLength={10}
        mask={maskDateString}
      />
    </>
  )
}
