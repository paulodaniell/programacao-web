// QUESTAO 1
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

function questao1() {
  const input = document.querySelector("#inputUser");
  const p = document.querySelector("#p");

  const valor = Number(input.value);

  if (!valor || valor < 1 || valor > 20) {
    p.textContent = "Digite um número entre 1 e 20!";
    p.style.color = "red";
    return;
  }

  if (valor === numeroSecreto) {
    p.textContent = "PARABÉNS!! Você Ganhou! O número era " + numeroSecreto;
    
    numeroSecreto = Math.floor(Math.random() * 20) + 1;
  } else if (valor > numeroSecreto) {
    p.textContent = "O numero é menor";
  } else {
    p.textContent = "O numero é maior";
  }
  
  input.value = "";
  input.focus();
}

// QUESTAO 2
function questao2() {
  const p2 = document.querySelector("#p2");

  const entrada = prompt("Escolha pedra, papel ou tesoura");

  if (!entrada) return;

  const usuario = entrada.trim().toLowerCase();

  const opcoes = ["pedra", "papel", "tesoura"];
  const computador = opcoes[Math.floor(Math.random() * 3)];

  if (usuario === computador) {
    p2.textContent = "Empate";
  } else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "tesoura" && computador === "papel") ||
    (usuario === "papel" && computador === "pedra")
  ) {
    p2.textContent = "Você ganhou!";
  } else {
    p2.textContent = "Computador ganhou!";
  }
}

// QUESTAO 3
function questao3() {
  const tabuada = document.querySelector("#inputTabuada");
  const lista = document.querySelector("#listaTabuada");

  const numero = Number(tabuada.value);

  lista.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");

    li.textContent = `${numero} x ${i} = ${numero * i}`;

    lista.appendChild(li);
  }
}

// QUESTAO 4
function questao4() {
  const arvore = document.querySelector("#arvore");
  const arv = document.querySelector("#listaArvore");

  const linhas = Number(arvore.value);

  arv.innerHTML = "";
  arv.style.listStyle = "none";

  for (let i = 1; i <= linhas; i++) {
    const li = document.createElement("li");

    let estrelas = "";

    for (let j = 0; j < i; j++) {
      estrelas += "*";
    }

    li.textContent = estrelas;

    arv.appendChild(li);
  }
}

// QUESTAO 5
function questao5() {
  const sequencia = document.querySelector("#sequencia");
  const texto = document.querySelector("#textoSoma");

  const nTermo = Number(sequencia.value);

  let um = "";
  let soma = 0;
  let sequenciaTexto = "";

  for (let i = 0; i < nTermo; i++) {
    um += "1";

    soma += Number(um);

    sequenciaTexto += um;

    if (i < nTermo - 1) {
      sequenciaTexto += " + ";
    }
  }

  texto.textContent = `${sequenciaTexto} = ${soma}`;
}
