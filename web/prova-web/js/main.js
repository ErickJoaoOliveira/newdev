let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
const qtdIdsDisponiveis = Number.MAX_VALUE;


inputNovaTarefa.addEventListener('keypress', (e) => {
    
    if(e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarIdV2(),
        }
        adicionarTarefa(tarefa);
    }
});

btnAddTarefa.addEventListener('click', (e) => {
    
    if(inputNovaTarefa.value === ""){
        alert("Insira uma tarefa");
    }else{

    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarIdV2(),
    }
    adicionarTarefa(tarefa);
}
});

function gerarId() {
    return Math.floor(Math.random() * qtdIdsDisponiveis);
}

function gerarIdV2() {
    return gerarIdUnico();
}

function gerarIdUnico() {

    let itensDaLista = document.querySelector('#listaTarefas').children;
    let idsGerados = [];

    for(let i=0;i<itensDaLista.length;i++) {
        idsGerados.push(itensDaLista[i].id);
    }

    let contadorIds = 0;
    let id = gerarId();

    while(contadorIds <= qtdIdsDisponiveis && 
        idsGerados.indexOf(id.toString()) > -1) {
            id = gerarId();
            contadorIds++;

            if(contadorIds >= qtdIdsDisponiveis) {
                alert("Oops, ficamos sem IDS :/");
                throw new Error("Acabou os IDs :/");
            }
        }

    return id;
}

function adicionarTarefa(tarefa) {
    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li);  
    inputNovaTarefa.value = '';  
}

function criarTagLI(tarefa) {

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div  = document.createElement('div');

    let btnCheck  = document.createElement('button');
    btnCheck.classList.add('check');
    btnCheck.innerHTML = '<i class="fa fa-check"></i>';
    btnCheck.setAttribute('onclick', 'check('+tarefa.id+')');

    let btnExcluir  = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');
    
    div.appendChild(btnCheck);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;

}

function excluir(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir? ');
    if(confirmacao) {
        let li = document.getElementById(''+ idTarefa + '');
        if(li) {
            listaTarefas.removeChild(li);
        }
    }
}

function check(idTarefa) {
    let confirmacao = window.confirm('Você concluiu ela ? ');
    if(confirmacao) {
        let li = document.getElementById(''+ idTarefa + '');
        if(li) {
            listaTarefas.removeChild(li);
        }
    }
}