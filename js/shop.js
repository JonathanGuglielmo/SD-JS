window.onload = function () {
        
    // Variables
            const baseDeDatos = [{
                    id: 1,
                    nombre: 'Branding',
                    precio: 15000,
                    imagen: 'img/LOGO-OK.png'
                    },
                    {
                    id: 2,
                    nombre: 'Desarrollo Web',
                    precio: 27000,
                    imagen: 'img/LOGO-OK.png'
                    },
                    {
                    id: 3,
                    nombre: 'Logitpo',
                    precio: 3000,
                    imagen: 'img/LOGO-OK.png'
                    },
                    {
                    id: 4,
                    nombre: 'Animacion (1 min)',
                    precio: 10000,
                    imagen: 'img/LOGO-OK.png'
                    }
            ];
    
            let carrito = [];
            let total = 0;
            const DOMitems = document.querySelector('#items');
            const DOMcarrito = document.querySelector('#carrito');
            const DOMtotal = document.querySelector('#total');
            const DOMbotonVaciar = document.querySelector('#boton-vaciar');
            const DOMbotonConfirmar = document.querySelector('#boton-confirmar');
            const miLocalStorage = window.localStorage;
    
    // Funciones
            function renderizarProductos() {
                baseDeDatos.forEach((info) => {
                    // Estructura
                    const miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-3');
                    // Body
                    const miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    // Titulo
                    const miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.textContent = info.nombre;
                    // Imagen
                    const miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('img-fluid');
                    miNodoImagen.setAttribute('src', info.imagen);
                    // Precio
                    const miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.textContent =  '$' + info.precio;
                    // Boton 
                    const miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primary');
                    miNodoBoton.textContent = '+';
                    miNodoBoton.setAttribute('marcador', info.id);
                    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                    // Insertamos
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    DOMitems.appendChild(miNodo);
                });
            }
    
    // Evento para añadir producto al Carrito
            function anyadirProductoAlCarrito(evento) {
                carrito.push(evento.target.getAttribute('marcador'))
                calcularTotal();
                renderizarCarrito();
                guardarCarritoEnLocalStorage();
            }
    
    // Función renderizar Carrito
            function renderizarCarrito() {
                DOMcarrito.textContent = '';
                const carritoSinDuplicados = [...new Set(carrito)];
                carritoSinDuplicados.forEach((item) => {
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });
                    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    const miNodo = document.createElement('li');
                    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
    
                // Boton de borrar
                    const miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.dataset.item = item;
                    miBoton.addEventListener('click', borrarItemCarrito);
                    miNodo.appendChild(miBoton);
                    DOMcarrito.appendChild(miNodo);
                });
            }
    
    // Evento para borrar item del Carrito
            function borrarItemCarrito(evento) {
                const id = evento.target.dataset.item;
                carrito = carrito.filter((carritoId) => {
                    return carritoId !== id;
                });
                renderizarCarrito();
                calcularTotal();
                guardarCarritoEnLocalStorage();
            }
    
    // Función para calcular el total
            function calcularTotal() {
                total = 0;
                carrito.forEach((item) => {
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });
                    total = total + miItem[0].precio;
                });
                DOMtotal.textContent = total.toFixed(2);
            }
    
    // Funcion vaciar Carrito
            function vaciarCarrito() {
                carrito = [];
                renderizarCarrito();
                calcularTotal();
                localStorage.clear();
            }
            function guardarCarritoEnLocalStorage () {
                miLocalStorage.setItem('carrito', JSON.stringify(carrito));
            }
            function cargarCarritoDeLocalStorage () {
                if (miLocalStorage.getItem('carrito') !== null) {
                    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
                }
            }

// Funcion confirmar compra
    function confirmarCompra() {
        carrito = [];
        renderizarCarrito();
        calcularTotal();
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            alert('Su compra se ha realizado con éxito');
        }
        else{ 
            alert('Debe ingresar al menos 1 servicio al carrito');
        }
        }
    function guardarCarritoEnLocalStorage () {
            miLocalStorage.setItem('carrito', JSON.stringify(carrito));
        }
    function cargarCarritoDeLocalStorage () {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }
    
    // Eventos
            DOMbotonVaciar.addEventListener('click', vaciarCarrito);
            DOMbotonConfirmar.addEventListener('click', confirmarCompra);
    
    // Inicio
            cargarCarritoDeLocalStorage();
            renderizarProductos();
            calcularTotal();
            renderizarCarrito();

            
    $("#pago").append(  
    `<h5 class="animacion">Seleccione su medio de pago</h5>
    <select name="pago" placeholder="metodos de pago" id="pago1"></select>`
  );  

  //JSON
var pagoField = document.querySelector('select[name = pago]');
const URLJSON = "pago.json"

fetch('pago.json')
.then(response => response.json())
.then(function(data){
    for(var i = 0; i <data.length; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = data[i].name;
        pagoField.appendChild(opt);
    }
})

  var medioPago = 0
$("#pago1").change(() => {
  var valor = shopField.value;
  var pagoIndicado = shopField.childNodes[valor].innerText;
  function procesarPago(respond) {
    switch (respond) {
        case "Tarjeta":
            return "Los datos para realizar el pago serán enviados por mail al completar la operación";
            break;
        case "Transferencia":
            return "Los datos para realizar el pago serán enviados por mail al completar la operación";
            break;
        case "MercadoPago":
            return "El código QR será enviado por mail al completar la operación";
            break;
    }
}
medioPago = procesarPago(pagoIndicado);
  alert("El medio de pago indicado es " + pagoIndicado + medioPago);
  updatePago();
    
});

function updatePago() {
    $(".medio-pago").remove();
    $(".medio-pago-div").append(`<p class="medio-pago">${medioPago}</p>`);
}
    }