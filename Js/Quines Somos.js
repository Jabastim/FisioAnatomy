
var modo = confirm("¿Quiere ver el fondo en otro color?")

/* if(condición) {
    sentencia VERDADERO
} else {
    sentencia FALSO
}
*/
if(modo) {
    var cuerpo = document.getElementById("fondo");
    cuerpo.style.backgroundColor = "#004d4d"

    var botones = document.getElementsByTagName("a")

    /*
    for (inicip;final;actualización) {
        sentencia a repetir
    }
    */
    for(var i=0; i<=botones.length; i++) {
    botones[i].style.color = "#e68a00"  
    }
}
