let entrada = prompt("¿Cómo te llamas?");
let salida = "¡Hola,"  + " " + entrada + "!";
alert(salida);

const resta = (a,b) => a - b
const precioProducto = prompt("Ingresa valor producto, ¡calcularemos el descuento!")
const montoDescuento = (precioProducto * 0.15);

let  precioFinal = resta(precioProducto, montoDescuento);
alert("¡El valor con 15% de descuento es" + " " + precioFinal +"!");