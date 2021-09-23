var formulario=document.getElementById("form");
var icono=document.getElementById("icono");

function ocultar_mostrar(){
    if(formulario.style.display == "none"){
        formulario.style.display = "block";
        icono.style.marginLeft = "300px";
    }else{
        formulario.style.display = "none";
    }
}