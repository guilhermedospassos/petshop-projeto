const botaoEntrar = document.getElementById("entrar");
const botaoCad = document.getElementById("cadastrar");
const telaEntrar = document.getElementById("log");
const telaCad = document.getElementById("cad");
const container = document.getElementById("container");

telaEntrar.classList.add("esconder");
telaCad.classList.add("esconder");
container.classList.add("espaco");

function mostrarEntrar() {
  telaEntrar.classList.remove("esconder");
  telaCad.classList.add("esconder");
  container.classList.remove("espaco");
}

function mostrarCad() {
  telaCad.classList.remove("esconder");
  telaEntrar.classList.add("esconder");
  container.classList.remove("espaco");
}

botaoEntrar.addEventListener("click", mostrarEntrar);
botaoCad.addEventListener("click", mostrarCad);
