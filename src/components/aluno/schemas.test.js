import {cadastroAluno} from './schemas'

describe('alunoSchema', () => {
  test('Should return true when model is valid', async () => {
    const aluno = {
      nome: 'Marcos Pacheco',
      dataNascimento: '22/12/1990',
      nacionalidade: 'Brasileiro',
      naturalidade: 'Carolinense',
      dadosRg: {
        rg: '1085117992',
        orgaoEmissor: 'SSP-MA',
        dataEmissao: '03/11/2021',
      },
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

    expect(await cadastroAluno.isValid(aluno)).toBe(true)
  })

  test('Should return false when model is invalid', async () => {
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
