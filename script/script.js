const form = document.getElementById("formContato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const statusMsg = document.getElementById("msgStatus");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Limpa mensagem anterior
  statusMsg.textContent = "";
  statusMsg.className = "";

  // Validação
  if (nome.value === "" || email.value === "" || mensagem.value === "") {
    statusMsg.textContent = "Preencha todos os campos!";
    statusMsg.classList.add("erro");
    return;
  }

  // Validação de email simples
  if (!email.value.includes("@") || !email.value.includes(".")) {
    statusMsg.textContent = "Digite um e-mail válido!";
    statusMsg.classList.add("erro");
    return;
  }

  // Sucesso
  statusMsg.textContent = "Mensagem enviada com sucesso!";
  statusMsg.classList.add("sucesso");

  // Limpar formulário
  form.reset();
});