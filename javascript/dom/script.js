document.getElementById("texto").innerHTML="Este Texto foi inserido através do Javascript"

function check(){
    var check = document.getElementsByName("checkb");
    console.log(check);
}

function onClick(){
    var click = document.getElementsByTagName("span");
    console.log(click)
}

function menu(){
    var men = document.getElementsByClassName("menu");
    console.log(men)
}