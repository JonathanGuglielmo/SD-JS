// Creando Evento al completar el formulario
// (si no completas algún dato obligatorio se muestra el resultado en la consola - de lo contrario va a dar error ya que la web esta offline)

let boton = document.getElementById("enviar")
boton.onmousemove = () =>{console.log("Un usuario se encuentra encima del botón ENVIAR")}
boton.onclick = () =>{console.log("Un usuario completó el formulario. Los datos fueron enviados por mail")}

// Éxito al ingresar datos en formulario en consola

let input1 = document.getElementById("nombre");
let input2 = document.getElementById("email");
let input3 = document.getElementById("telefono");
let input4 = document.getElementById("mensaje");

input1.onchange = () => {console.log("Un usuario ingresó su nombre")};
input2.onchange = () => {console.log("Un usuario ingresó su email")};
input3.onchange = () => {console.log("Un usuario ingresó su telefono")};
input4.onchange = () => {console.log("Un usuario ingresó un mensaje")};

// Agregando Pie de página con jQuery - append

$("div.derechos").append("<p><h3>Shark Design 2021® Todos los derechos reservados. Buenos Aires, Argentina</h3></p>");

// Agregando aclaración con jQuery - prepend

$("#aclaracion").prepend("<div><p><h3>*la siguiente cotización no incluye IVA</h3></p></div>");

// Eventos con jQuery

$( document ).ready(function() {
    console.log('El DOM está listo')
})

window.addEventListener('load', function() {
    console.log( 'Todos los elementos fueron cargados')
})

// Botón ir derecho al formulario de contacto

$('#services').prepend('<a href="#contactform"><button id="btnjQuery"><p>IR AL FORMULARIO DE CONTACTO</p></button></a>');
console.log("El usuario presionó el boton para ir derecho al formulario de contacto");
$('#services2').append('<p id=pjQuery>presiona éste boton para ir derecho al formulario de contacto</p>');
console.log("El usuario presionó el parrafo");

// Agregando trigger (innecesario, lo se. Solo práctica)

$("#btnjQuery").change((e) =>{
    alert("Fuiste redirigido al formulario de contacto");
})
$("#pjQuery").click(() =>{
    $("#btnjQuery").trigger("change");
});

// Animaciones extra

$('#titulo').animate({
    opacity:'0.9',
    width:'90%'},
    1500,
    function(){
        console.log("final de animacion");
    })

$('#titulo2').animate({
    opacity:'0.9',
    width:'90%'},
    1500,
    function(){
        console.log("final de animacion");
    })

$('#titulo3').animate({
    opacity:'0.9',
    width:'90%'},
    1500,
    function(){
        console.log("final de animacion");
    })
    
$('#titulo4').animate({
    opacity:'0.9',
    width:'90%'},
    1500,
    function(){
        console.log("final de animacion");
    })

