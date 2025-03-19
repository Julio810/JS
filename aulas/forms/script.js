const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value === "") {
    alert("Por favor, preencha seu NOME");
    return;
  }

  //Verificar se o e-mail está preenchido e se é válido

  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha seu E-MAIL");
    return;
  }

  //Verifica se a senha está preenchido

  if (!validatePassword(passwordInput.value, 8)) {
    alert("A SENHA precisa de no mínimo 8 dígitos")
    return
  }

  //Verificar se a situação foi selecionada

  if(jobSelect.value === "") {
    alert("Por favor, selecione a sua SITUAÇÃO")
    return
  }

  if(messageTextArea.value === "") {
    alert("Escreva uma MENSAGEM")
    return
  }

  //Se todos os campos estiverem preenchidos corretamente, envie o form

  form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true
    }

    return false
}

//Função que valida a senha
function validatePassword (password, minDigits) {
    if(password.length >= minDigits){
        return true
    }
    return false
}