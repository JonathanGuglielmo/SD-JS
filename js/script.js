// Presupuestador Online Shark-Design //

// Función Cotizar
function cotizar(){

alert('Bienvenido al presupuestador online de Shark Design');
let usuario = prompt('A continuación ingrese su nombre y apellido');
let servicio = prompt('¿Que servicio querés cotizar?: \n-Diseño gráfico \n-Comunnity Manager \n-Diseño Web');
servicio = servicio.toUpperCase();

let servicioSeleccionado = indentificarServicio(servicio).toUpperCase();
console.log(servicioSeleccionado)

let precio

// Constante precios
const precios = ["3000", "9000", "5000", "10000", "80000", "24000", "37000"]

switch (servicioSeleccionado) {
    case "1":
        precio = precios[0];
        break;
    case "2":
        precio = precios[1];
        break;
    case "3":
        precio = precios[2];
        break;
    case "4":
        precio = precios[3];
        break;
    case "5":
        precio = precios[4];
        break;
    case "6":
        precio = precios[5];
        break;
    case "7":
        precio = precios[6];
        break;
    default:
        "No se identificó el servicio";
        break;
}

// Función identificar Servicio

function indentificarServicio(servicio) {
    switch (servicio) {
        case "DISEÑO GRAFICO":
            return prompt('¿Que clase de diseño? (escoge un numero según el servicio deseado): \n1- Logo \n2- Branding \n3- Flyer');
            break;
        case "COMUNNITY MANAGER":
            return prompt('Tenemos dos opciones ¿Cual preferís? (escoge un numero según el servicio deseado): \n4- Mensual \n5- Anual');
            break;
        case "DISEÑO WEB":
            return prompt('¿Que tipo de web necesitas? (escoge un numero según el servicio deseado): \n6- Landing Page \n7- Full web');
            break;
        default:
            "No se identificó el servicio";
            break;
    }
}

// Objeto Diseño
class Diseño{
    constructor(duracion, mediosdepago, entrega){
        this.duracion = duracion;
        this.mediosdepago = mediosdepago;
        this.entrega = entrega;
        this.stock = true
    }
    condiciones(){
        alert("La duración estimada del proyecto es de: "+(this.duracion)+"\nLos medios de pago son: "+(this.mediosdepago)+"\nLa entregá se realizará en una plazo de: "+(this.entrega));
    }
}

let diseño1 = new Diseño("15 días", "Transferencia o depósito", "Entrega parcial a los 10 días. Entrega final a los 15 días");
diseño1.condiciones();

alert(usuario + "gracias por cotizar con nosotros. El presupuesto por el servicio de " + servicio + ", es de: $" + precio) 
}