function dibujarCajas(){
    var n1=prompt("Ingresa el número de cajas","");
    document.getElementById("resultado").innerHTML=" ";
    for(var i=0; i<n1; i++){
        if(n1<8){
            var elemento=document.createElement("div");
            elemento.setAttribute("class","cajaVertical");
            document.getElementById("resultado").appendChild(elemento);
        }else{
            var elemento=document.createElement("div");
            elemento.setAttribute("class","cajaHorizontal");
            document.getElementById("resultado").appendChild(elemento);
        }
    }
    
}

function votosCandidatos(){
    var zona=document.getElementById("zonas");
    var zonaSeleccionada = zona.options[zona.selectedIndex].text;
    var candidato=document.getElementsByName("candidato");
    for(var i=0; i<candidato.length; i++){
        if(candidato[i].checked){
            var radioValor = candidato[i].value;
        }
    }
    if(zonaSeleccionada==="Seleccione una zona"){
        document.getElementById("resultado").innerHTML = "Seleccione una zona";
    }else{
        datos="Zona: "+zonaSeleccionada+"<br>"+radioValor;
        document.getElementById("resultado").innerHTML = datos;
    }
}

function sumatoria(){
    var suma=0;
    var num2=parseInt(prompt("Ingresa un número (Si es <=0 el programa termina)",""));
    var datos="";
    while(num2>0){
        suma+=num2;
        datos+=num2+" + ";
        var num2=parseInt(prompt("Ingresa un número (Si es <=0 el programa termina)",""));
    }
    datos += " = "+suma;
    document.getElementById("resultado").innerHTML = datos;
}