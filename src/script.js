function verificarLogin() {
    let usuario = document.getElementById("Usuario").value.trim();
    let senha = document.getElementById("Senha").value.trim();
    let mensagemErro = document.getElementById("mensagemErro");

    if (usuario == "admin" && senha == "admin") {
        alert("Login realizado com sucesso!");
        window.location.href = "src/home.html";
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos!";
        mensagemErro.style.color = "red";
    }
}

function cadastrar() {
    let usuario = document.getElementById("Usuario").value.trim();
    let email = document.getElementById("Email").value.trim();
    let dataNascimento = document.getElementById("txtdtNascimento").value;
    let CPF = document.getElementById("CPF").value.trim();
    let senha = document.getElementById("Senha").value.trim();

    if (usuario == "" || senha == "" || dataNascimento == "" || email == "" || CPF == "") {
        mensagemErro.textContent = "Todos os campos devem ser preenchidos!";
        mensagemErro.style.color = "red";
        //return;
    }
    else {
        validarIdade(dataNascimento);
    }
}

function validarIdade(dataNascimento) {
    let dataAtual = new Date();
    let dataNasc = new Date(dataNascimento);
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    let mensagemErro = document.getElementById("mensagemErro");


    if (idade < 18) {
        mensagemErro.textContent = "Você foi nao tem idade suficiente para acessar o site!";
        mensagemErro.style.color = "red";
        return;
    }
    else {
        alert('Seja bem-vindo');
    }
}