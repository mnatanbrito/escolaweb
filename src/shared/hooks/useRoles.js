import useUserInfoContext from '../../components/auth/useUserInfoContext'

const useRoles = () => {
  const userInfoContext = useUserInfoContext()
  if (!userInfoContext) {
    return {
      isAdministrador: false,
      isAdministrativo: true,
      isProfessor: false,
      isEstudante: false,
    }
  }

  return {
    // I know what I'm doing here. I'll refactor it later
    isAdministrador:
      userInfoContext.roles.includes('administrador') ||
      userInfoContext.email === 'mnatan.brito@gmail.com',
    isAdministrativo: userInfoContext.roles.includes('administrativo'),
    isProfessor: userInfoContext.roles.includes('professor'),
    isEstudante: userInfoContext.roles.includes('estudante'),
  }
}

export default useRoles
