console.log('Bienvenido al juego de la bruja, escribe "help" para abrir la ayuda.');
var value = 0;
var cont = 1;

do{
    var cmd = prompt('Ingrese un comando para comenzar.');
    getCommand(cmd.toLowerCase());
    console.log(document.getElementById('i1').style.top)
    cont++;
}while(cont < 5);


function getCommand(command){
    var obj = document.getElementById('i1');
    var pos = obj.getBoundingClientRect();
    x = pos.left;
    xR = pos.right;
    y = pos.top;
    console.log(y)
    
    if(command === "up"){
        value = y - 5;
        document.getElementById('i1').style.top = value + "px";
    }
    else if(command === "down"){
        value = y + 5;
        document.getElementById('i1').style.top = value + "px";
    }
    if (command === "left") {
        value = x + 5;
        document.getElementById('i1').style.left = value + "px";
    }
    if (command === "right") {
        value =  xR + 5;
        document.getElementById('i1').style.left = value + "px"
    }

}
