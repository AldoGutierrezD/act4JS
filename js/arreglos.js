var arreglo = ['Manzana', 'Sandia', 'Melón', 'Platano', 'Naranja', 'Pera', 'Limón', 'Jitomate', 'Brocoli', 'Zanahoria', 'Papa'];
var bebidas = ['Agua','Refresco','Café','Té','Leche'];

function funcionPop(){
    arreglo.pop();
    document.getElementById("resultado").innerHTML=arreglo;
}

function funcionShift(){
    arreglo.pop();
    document.getElementById("resultado").innerHTML=arreglo;
}

function funcionesArreglos(){
    var funcion=document.getElementById("funciones");
    var opcion = funcion.options[funcion.selectedIndex].text;
    console.log(opcion);
    switch(opcion){
        case "Pop":
            arreglo.pop();
            document.getElementById("resultado").innerHTML=arreglo;
            break;
        case 'Shift':
            arreglo.shift();
            document.getElementById("resultado").innerHTML=arreglo;
            break;
        case 'Push':
            var valor=prompt("Este elemento se agregará al final","Ingresa el elemento nuevo");
            arreglo.push(valor);
            document.getElementById("resultado").innerHTML=arreglo;
            break;
        case 'Unshift':
            var valor=prompt("Este elemento se agregará al incio","Ingresa el nuevo elemento");
            arreglo.unshift(valor);
            document.getElementById("resultado").innerHTML=arreglo;
            break;
        case 'Splice':
            var i=prompt("En que posición quieres agregar el elemento [0 - "+arreglo.length+"]","");
            if(i>=0 && i<arreglo.length){
                var valor=prompt("Ingresa el nuevo elemento","");
                var flag=prompt("¿Quiéres remplazar o agregar como nuevo elemento? R/A","");
                if(flag==="R" || flag==="r"){
                    arreglo.splice(i,1,valor);
                    document.getElementById("resultado").innerHTML=arreglo;
                }else if(flag==="A" || flag==="a"){
                    arreglo.splice(i,0,valor);
                    document.getElementById("resultado").innerHTML=arreglo;
                }else{
                    document.getElementById("resultado").innerHTML="Valor incorrecto";
                }
            }else{
                document.getElementById("resultado").innerHTML="Valor incorrecto";
            }
            break;
        case 'Delete':
            var i=prompt("¿Cuál es la posición del elemento a eliminar [0 - "+arreglo.length+"]","");
            if(i>=0 || i<arreglo.length){
                delete arreglo[i];
                document.getElementById("resultado").innerHTML=arreglo;
            }else{
                document.getElementById("resultado").innerHTML="Valor incorrecto";
            }
            break;
        case 'Reverse':
            arreglo.reverse();
            document.getElementById("resultado").innerHTML=arreglo;
            break;
        case 'Sort':
            arreglo.sort();
            document.getElementById("resultado").innerHTML=arreglo;
            break;
        case 'Concat':
            alert("Se unirá el arreglo de frutas y verduras con el de bebidas");
            var arregloConcat=arreglo.concat(bebidas);
            document.getElementById("resultado").innerHTML=arregloConcat;
            break;
        case 'Join':
            document.getElementById("resultado").innerHTML=arreglo.join('');
            break;
        case 'Length':
            var longitud=arreglo.length;
            res="El tamaño del arreglo es "+longitud;
            document.getElementById("resultado").innerHTML=res;
            break;
    }
}