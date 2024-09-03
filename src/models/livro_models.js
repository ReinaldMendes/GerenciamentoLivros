let nextId = 1;

const model = (livro, id = nextId++) => {
  if (
    livro.titulo != undefined &&
    livro.titulo != "" &&
    livro.autor != undefined &&
    livro.autor != "" &&
    livro.genero != undefined &&
    livro.genero != "" &&
    livro.ano != undefined &&
    livro.ano != "" &&
    livro.ano > 0
  ) {
    return {
      id,
      titulo: livro.titulo,
      matricula: livro.matricula,
      genero: livro.genero,
      ano: livro.ano,
    };
  }
};

module.exports = model;
