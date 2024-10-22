const form = document.getElementById ('form-atividade');
const imgAgendado= '<img src = "./imagens/verificar.png" alt = contato Agendado " />';
const imgNome= '<img src ="./imagens/contato.png" alt = nome agendado " />';
const nome = [];
const telefone = [];
const spanAgendado = '<span class="Nome agendado">Agendado</span>';
let linhas = ''; 

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela ();   

});

function adicionaLinha () {
        const inputNomeContato = document.getElementById ('nome-contato');
        const inputTelefone = document.getElementById ('tel-atividade'); 

        if (nome.includes( inputNomeContato.value)) {
            alert (`O contato: ${inputNomeContato.value} já foi adicionado`);
        } else {
        nome.push (inputNomeContato.value);
        telefone.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';                  
        linha += `<td>${inputNomeContato.value}</td>` ;         
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${imgAgendado}</td>`;
       
        linha += '</td>';

        linhas += linha ; 
        
        }
        
    inputNomeContato.value = '';
    inputTelefone.value = '';
    
}

function atualizaTabela () {
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;    
}




    
