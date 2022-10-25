var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;
var seEstaDibujando = false;
var tamPos = cuadrito.getBoundingClientRect();
var color = document.getElementById("seleccionar_color");


cuadrito.addEventListener("mousedown", mousePresionado);
cuadrito.addEventListener("mousemove", moviendoMouse);
cuadrito.addEventListener("mouseup", terminarDibujo);


function mousePresionado(e) {
    x = e.clientX - tamPos.left;
    y = e.clientY - tamPos.top;
    seEstaDibujando = true;

}
function moviendoMouse(e) {
    if (seEstaDibujando) {
        dibujarLinea(color.value, x, y, e.clientX - tamPos.left, e.clientY - tamPos.top, papel);

        x = e.clientX - tamPos.left;
        y = e.clientY - tamPos.top;
    }
}
function terminarDibujo(e) {
    if (seEstaDibujando) {

        dibujarLinea(color.value, x, y, e.clientX - tamPos.left, e.clientY - tamPos.top, papel);

        seEstaDibujando = false;
    }

}

function borrarCanvas() {

    papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
    x = 0;
    y = 0;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 10;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}