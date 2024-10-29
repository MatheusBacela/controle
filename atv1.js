function getValue(){
    const entrada = document.getElementById('myInput').value;

    if (entrada){
        console.log("O valor do input é "+ entrada);        
    }
    else{
        console.error("erro, input vazio.");
        
    }

}