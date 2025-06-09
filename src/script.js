function cadastrar() {
    event.preventDefault();

    const usuario = document.getElementById('Usuario').value;
    const email = document.getElementById('Email').value;
    const dataNascimento = document.getElementById('txtdtNascimento').value;
    const cpf = document.getElementById('CPF').value;
    const senha = document.getElementById('Senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    if (!usuario || !email || !dataNascimento || !cpf || !senha) {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
        mensagemErro.style.color = 'red';
        return;
    }

    if (localStorage.getItem(usuario)) {
        mensagemErro.textContent = 'Nome de usuário já existe. Por favor, escolha outro.';
        mensagemErro.style.color = 'red';
        return;
    }

    const userData = {
        email: email,
        dataNascimento: dataNascimento,
        cpf: cpf,
        senha: senha
    };

    localStorage.setItem(usuario, JSON.stringify(userData));

    mensagemErro.textContent = 'Cadastro realizado com sucesso!';
    mensagemErro.style.color = 'green';

    setTimeout(() => {
        window.location.href = './login.html';
    }, 2000);
}

function verificarLogin() {
    event.preventDefault();

    const usuario = document.getElementById('Usuario').value;
    const senha = document.getElementById('Senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    if (!usuario || !senha) {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
        mensagemErro.style.color = 'red';
        return;
    }

    const storedUserData = localStorage.getItem(usuario);

    if (!storedUserData) {
        mensagemErro.textContent = 'Usuário não encontrado.';
        mensagemErro.style.color = 'red';
        return;
    }

    const userData = JSON.parse(storedUserData);

    if (userData.senha === senha) {
        mensagemErro.textContent = 'Login realizado com sucesso!';
        mensagemErro.style.color = 'green';
        setTimeout(() => {
            window.location.href = './home.html';
        }, 1500);
    } else {
        mensagemErro.textContent = 'Senha incorreta.';
        mensagemErro.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const botoesCotas = document.querySelectorAll('.cotas button, .linha-cotas button');
    const conteudoBilhete = document.getElementById('betslipContent');
    const totalOddsValue = document.getElementById('totalOddsValue');
    const stakeInput = document.getElementById('stakeInput');
    const quickStakesButtons = document.querySelectorAll('.apostas-rapidas button');
    const placeBetBtn = document.getElementById('placeBetBtn');
    const joinNowBtn = document.getElementById('joinNowBtn');

    let apostasSelecionadas = [];

    if (joinNowBtn) {
        joinNowBtn.addEventListener('click', () => {
            alert('A funcionalidade de perfil (login/cadastro) não está ativa nesta versão. Você pode apostar diretamente!');
        });
    }

    function atualizarBilhete() {
        conteudoBilhete.innerHTML = '';
        let totalOdds = 1;

        if (apostasSelecionadas.length === 0) {
            conteudoBilhete.innerHTML = '<p class="bilhete-vazio">Seu bilhete está vazio. Clique nas cotas para adicionar apostas.</p>';
        } else {
            apostasSelecionadas.forEach((aposta, index) => {
                const itemApostaDiv = document.createElement('div');
                itemApostaDiv.classList.add('item-aposta');
                itemApostaDiv.innerHTML = `
                    <span class="nome-time">${aposta.time}</span>
                    <span class="tipo-aposta">${aposta.jogo}</span>
                    <span class="cota">${aposta.cota.toFixed(2)}</span>
                    <i class="fas fa-times fechar-aposta" data-index="${index}"></i>
                `;
                conteudoBilhete.appendChild(itemApostaDiv);
                totalOdds *= aposta.cota;
            });
        }

        totalOddsValue.textContent = totalOdds.toFixed(2);
        calcularPotencialRetorno();
    }

    function adicionarRemoverAposta(oddButton) {
        const cota = parseFloat(oddButton.dataset.odd);
        const time = oddButton.dataset.team;
        const jogo = oddButton.dataset.match;
        const matchId = oddButton.closest('.cartao-jogo, .match-card').dataset.matchId;

        const indexExistente = apostasSelecionadas.findIndex(aposta => aposta.matchId === matchId);

        if (indexExistente !== -1) {
            if (apostasSelecionadas[indexExistente].cota === cota && apostasSelecionadas[indexExistente].time === time) {
                apostasSelecionadas.splice(indexExistente, 1);
                oddButton.classList.remove('selecionado');
            } else {
                apostasSelecionadas[indexExistente] = { cota, time, jogo, matchId };
                const botoesDoMesmoJogo = oddButton.closest('.cotas, .linha-cotas').querySelectorAll('button');
                botoesDoMesmoJogo.forEach(btn => btn.classList.remove('selecionado'));
                oddButton.classList.add('selecionado');
            }
        } else {
            const botoesDoMesmoJogo = oddButton.closest('.cotas, .linha-cotas').querySelectorAll('button');
            botoesDoMesmoJogo.forEach(btn => btn.classList.remove('selecionado'));

            apostasSelecionadas.push({ cota, time, jogo, matchId });
            oddButton.classList.add('selecionado');
        }
        atualizarBilhete();
    }

    function removerApostaPeloIndice(index) {
        const matchIdRemovido = apostasSelecionadas[index].matchId;
        apostasSelecionadas.splice(index, 1);
        
        const botoesNoJogo = document.querySelector(`[data-match-id="${matchIdRemovido}"] .cotas button, [data-match-id="${matchIdRemovido}"] .linha-cotas button`);
        if (botoesNoJogo) {
            botoesNoJogo.classList.remove('selecionado');
        }

        atualizarBilhete();
    }

    function calcularPotencialRetorno() {
        const apostaValor = parseFloat(stakeInput.value);
        const totalOdds = parseFloat(totalOddsValue.textContent);
        const retornoPotencialSpan = document.getElementById('retornoPotencial'); 

        if (retornoPotencialSpan) { 
            if (!isNaN(apostaValor) && apostaValor > 0 && !isNaN(totalOdds) && totalOdds > 0) {
                retornoPotencialSpan.textContent = (apostaValor * totalOdds).toFixed(2);
            } else {
                retornoPotencialSpan.textContent = '0.00';
            }
        }
    }

    botoesCotas.forEach(button => {
        button.addEventListener('click', () => adicionarRemoverAposta(button));
    });

    conteudoBilhete.addEventListener('click', (event) => {
        if (event.target.classList.contains('fechar-aposta')) {
            const index = parseInt(event.target.dataset.index);
            removerApostaPeloIndice(index);
        }
    });

    stakeInput.addEventListener('input', calcularPotencialRetorno);

    quickStakesButtons.forEach(button => {
        button.addEventListener('click', () => {
            stakeInput.value = button.dataset.stake;
            calcularPotencialRetorno();
        });
    });

    placeBetBtn.addEventListener('click', () => {
        const apostaValor = parseFloat(stakeInput.value);
        if (apostasSelecionadas.length === 0) {
            alert('Por favor, adicione uma aposta ao seu bilhete antes de apostar.');
            return;
        }
        if (isNaN(apostaValor) || apostaValor <= 0) {
            alert('Por favor, insira um valor de aposta válido.');
            return;
        }

        const confirmacao = confirm(`Você está prestes a apostar R$${apostaValor.toFixed(2)} com cotas totais de ${totalOddsValue.textContent}. Deseja continuar?`);
        if (confirmacao) {
            alert('Aposta realizada com sucesso! (Simulação)');
            apostasSelecionadas = [];
            atualizarBilhete();
            stakeInput.value = '10.00';
            calcularPotencialRetorno();
            document.querySelectorAll('.cotas button, .linha-cotas button').forEach(btn => btn.classList.remove('selecionado'));
        }
    });

    atualizarBilhete();
});