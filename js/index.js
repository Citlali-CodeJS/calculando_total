let precio = 400000
let cantidad = 0
let valor = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


function total(cantidad){
    valorSpan = document.querySelector(".valortotal")
    valor = cantidad * precio
    valorSpan.innerHTML = valor
}
function add() {
    cantidadSpan = document.querySelector(".cantidad");
    cantidad = cantidad + 1
    total(cantidad)
    cantidadSpan.innerHTML = cantidad
}
function sub() {
    cantidadSpan = document.querySelector(".cantidad");
    cantidad = Math.max(cantidad - 1, 0);
    if (cantidad === 0) {
        alert("CÓMO QUE NINGUNA?🤨");
    }
    total(cantidad);
    cantidadSpan.innerHTML = cantidad;
}
   