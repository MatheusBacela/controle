function getValue(){
    const entrada = document.getElementById('myInput').value;

    document.getElementById('outInput').innerHTML = entrada;
}


// function valorInput() {
//     // Seleciona o elemento input pelo ID
//     const inputElement = document.getElementById('myInput');

//     // Seleciona o elemento parágrafo pelo ID
//     const paragraphElement = document.getElementById('output');

//     // Verifica se o elemento input e o elemento parágrafo foram encontrados
//     if (inputElement && paragraphElement) {
//         // Obtém o valor do input
//         const value = inputElement.value;

//         // Define o valor do parágrafo como o valor do input