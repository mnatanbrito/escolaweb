export const listAlunos = (skip, take) => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            nome: 'Marcos Natan',
            dataNascimento: new Date(),
          },
          {
            id: 2,
            nome: 'Flor de Maria',
            dataNascimento: new Date(),
          },
        ]),
      1500
    );
  });
};
