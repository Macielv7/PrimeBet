let usuario = document.getElementById('usuario');
let senha = document.getElementById('senha'); 

function validar() {
    if(usuario.value === 'admin' && senha.value === 'admin') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Usuário ou senha incorretos!');
    }
}