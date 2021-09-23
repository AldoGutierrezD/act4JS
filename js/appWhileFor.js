function sumarImpares(){
    var resultados="";
    var suma=0;
    for(var i=1; i<=100; i+=2){
        suma+=i;
        resultados+=i+",";
    }
    document.getElementById("resultado").innerHTML=resultados+" = "+suma;
}

function asteriscos(){
    var num1=parseInt(document.getElementById("n1").value);
    var i=0;
    var resultados="";
    while(i<num1){
        resultados+=" * ";
        i++;
    }
    document.getElementById("resultado").innerHTML=resultados;
}

function tablas(){
    var resultados="",mult;
    for(var i=1; i<=10; i++){
        for(var j=1; j<=10; j++){
            mult=i*j;
            resultados+=i+" * "+j+" = "+mult+"<br>";
            if(j==10){
                resultados+="<br><br>";
            }
        }
    }
    document.getElementById("resultado").innerHTML=resultados;
}