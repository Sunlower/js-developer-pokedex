const dadosArmazenados = localStorage.getItem('Pokemon');
const botao = document.getElementById('objeto')



botao.addEventListener('click', (event) => {
    // Verifique se os dados foram encontrados
    if (dadosArmazenados) {
        // Converta a string JSON de volta para um objeto JavaScript
        const dados = JSON.parse(dadosArmazenados);
    
        // Use os dados como necessário
        console.log(`Nome: ${dadosArmazenados.nome}, Idade: ${dadosArmazenados.idade}`);
    }
})