let nextId = 1;

const model = (estudante, id = nextId++) => {
  if (
    estudante.nome != undefined &&
    estudante.nome != "" &&
    estudante.matricula != undefined &&
    estudante.matricula != "" &&
    estudante.curso != undefined &&
    estudante.curso != "" &&
    estudante.ano != undefined &&
    estudante.ano != "" &&
    estudante.ano > 0
  ) {
    return {
      id,
      nome: estudante.nome,
      matricula: estudante.matricula,
      curso: estudante.curso,
      ano: estudante.ano,
    };
  }
};

module.exports = model;
