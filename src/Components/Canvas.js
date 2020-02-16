import React from "react";
import '../Components/Styles/CanvasDraw.css'

class Canvas extends React.Component{
    componentDidMount(){
        var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
        console.log(teclas);
        document.addEventListener("keydown", dibujarTeclado);
        var cuadrito = document.getElementById("canvas");
        var papel = cuadrito.getContext("2d");
        var x = 150, y = 100;
        
        function dibujar(color, xinicial, yinicial, xfinal, yfinal, lienzo)
        {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.lineWidth = 3;
        lienzo.moveTo(xinicial,yinicial);
        lienzo.lineTo(xfinal,yfinal);
        lienzo.stroke();
        lienzo.closePath();
        }
        function dibujarTeclado(evento)
        {
          console.log(evento);
          var colorcito = " rgb(121,231,223)";
          var movimiento = 10;
          switch (evento.keyCode) {
            case teclas.DOWN:
              dibujar(colorcito, x, y, x, y + movimiento, papel);
              y = y + movimiento;
              console.log("abajo");
            break;
            case teclas.UP:
              dibujar(colorcito, x, y, x, y - movimiento, papel);
              y = y - movimiento;
              console.log("arriba");
            break;
            case teclas.LEFT:
              dibujar(colorcito, x, y, x - movimiento, y, papel);
              x = x - movimiento;
              console.log("Izq");
            break;
            case teclas.RIGHT:
              dibujar(colorcito, x, y, x + movimiento, y, papel);
              x = x + movimiento;
              console.log("der");
            break;
        
          }
        }
        
    }
    render() {
        return <div className="canvasDraw"  >
            <h1>Dibuja con canvas</h1>
            <canvas className="Draw" id="canvas" width="300" height="200"></canvas>
            <p>Mueve las teclas para dibujar</p>
        </div>
    }
}

export default Canvas


