function carConteudo(){
 alert("HELLO TO THE JAVASCRIPT WORLD");
}

function mouseOver(){
    document.getElementById("mouseAlt").innerHTML="Remova o mouse";
}

function mouseOut(){
    document.getElementById("mouseAlt").innerHTML="Passe o mouse";
}

function converTexto(){
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUppercase();
}

function validarSenha(){
    var senha = document.getElementById("senha");
    
    if(senha =="" || senha.length <=5){
        document.getElementById("erroSenha").innerHTML="Passe o mouse";
    }
}