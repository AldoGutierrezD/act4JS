function ordenarNumeros(){
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var num3=parseInt(document.getElementById("n3").value);
    var resultados;
    //3-7-2   =   7-3-2
    if(num1>num2 && num2>num3){
        resultados="Números ordenados: "+num1+","+num2+","+num3;
    }else if(num1>num3 && num3>num2){
        resultados="Números ordenados: "+num1+","+num3+","+num2;
    }else if(num2>num1 && num1>num3){
        resultados="Números ordenados: "+num2+","+num1+","+num3;
    }else if(num2>num3 && num3>num1){
        resultados="Números ordenados: "+num2+","+num3+","+num1;
    }else if(num3>num1 && num1>num2){
        resultados="Números ordenados: "+num3+","+num1+","+num2;
    }else if(num3>num2 && num2>num1){
        resultados="Números ordenados: "+num3+","+num2+","+num1;
    }
    document.getElementById("resultado").innerHTML=resultados;
}

function importeNeto(){
    var num4=parseInt(document.getElementById("n4").value);
    var resultados;
    if(num4>=15000){
        impuestos=num4*.16;
        resultados="Importe bruto: $"+num4+"<br>Impuestos(16%): $"+impuestos+"<br>Importe neto: $"+(num4+impuestos);
    }else if(num4>0 && num4<15000){
        impuestos=num4*.10;
        resultados="Importe bruto: $"+num4+"<br>Impuestos(10%): $"+impuestos+"<br>Importe neto: $"+(num4+impuestos);
    }else{
        resultados="Ingrese un valor correcto";
    }
    document.getElementById("resultado").innerHTML=resultados;
}

function nuevoSueldo(){
    var num5=parseInt(document.getElementById("n5").value);
    var resultados;
    if(num5>=10){
        aumento=Math.round(40000*.10);
        resultados="Sueldo anterior: $40000 <br>Aumento(10%): $"+aumento+"<br>Sueldo nuevo: $"+(40000+aumento);
    }else if(num5>=5 && num5<10){
        aumento=Math.round(40000*.07);
        resultados="Sueldo anterior: $40000 <br>Aumento(7%): $"+aumento+"<br>Sueldo nuevo: $"+(40000+aumento);
    }else if(num5>=3 && num5<5){
        aumento=Math.round(40000*.05);
        resultados="Sueldo anterior: $40000 <br>Aumento(5%): $"+aumento+"<br>Sueldo nuevo: $"+(40000+aumento);
    }else if(num5>0 && num5<3){
        aumento=Math.round(40000*.03);
        resultados="Sueldo anterior: $40000 <br>Aumento(3%): $"+aumento+"<br>Sueldo nuevo: $"+(40000+aumento);
    }else{
        resultados="Es necesario tener mínimo 1 año de antigüedad";
    }
    document.getElementById("resultado").innerHTML=resultados;
}