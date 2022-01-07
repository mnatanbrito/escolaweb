import {cadastroAluno} from './schemas'

describe('alunoSchema', () => {
  it('Should return true when model is valid', async () => {
    const aluno = {
      nome: 'Marcos Pacheco',
      dataNascimento: '22/12/1990',
      naturalidade: 'Carolinense',
      endereco: {
        numero: 224,
        rua: '1 Old Mill Drive',
        bairro: 'York',
        cidade: 'Toronto',
        estado: {
          nome: 'Maranhão',
          sigla: 'MA',
        },
      },
    }

    const validacao = await cadastroAluno.isValid(aluno)

    expect(validacao).toBe(true)
  })

  it('Should return false when model is invalid', async () => {
    const aluno = {
      nome: 'Marcos Pacheco',
      dataNascimento: '22/12/1990',
      naturalidade: 'Carolinense',
      endereco: null,
    }

    const validacao = await cadastroAluno.isValid(aluno)

    expect(validacao).toBe(false)
  })
})
