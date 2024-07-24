const prompt = require("prompt-sync")();

const votos = [];
  

const criar = () => {

  let voto = +prompt("Seu voto? ");
  console.log(`Escolha um cadidato:
  cadidato 1 = 1
  cadidato 2 = 2
  cadidato 3 = 3
  cadidato 4 = 4`);

  votos.push(voto);
  console.log("Voto compultado");
}

const listar = () => {
  votos.forEach((voto, indice) => {
    console.log(`${indice + 1} : ${voto}`);
  });
};


const atualizar = () => {
  listar();

  let indice = prompt("Qual indice deseja atualizar? ");
  let atual = prompt(" Voto atualizado ");

  let voto = modelo();

  votos[--indice] = voto;

  console.log("Atualizado");
};

const remover = () => {
  listar();

  let indice = prompt("Qual indice sera removido? ");

  votos.splice(--indice, 1);

  console.log("Removido");
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};