const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verificando se o nome está vazio.
  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }
  
  // Verifica se o email está preenchido e se é válido.
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha seu E-mail");
    return;
  }

  // Verifica se a senha está preenchida.
  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ter no mínimo 8 dígitos");
    return;
  }

  if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação");
    return;
  }

  // Verifica se a mensagem está preenchida.
  if (messageTextarea.value === "") {
    alert("Por favor, escreva uma mensagem");
    return;
  }

  // Se todos os campos estiverem corretos, o formulário será enviado.
  form.submit();
});

// Função que valida e-mail.
function isEmailValid(email) {
  // Cria uma regex para validar o email.
  const emailRegex = new RegExp(/^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/);

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

// Função que valida a Senha.
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    // Senha válida.
    return true;
  }
  // Senha inválida.
  return false;
}
