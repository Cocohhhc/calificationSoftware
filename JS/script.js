/****************************************************************************************************
                          ************Archivo scrips pequeños***********
****************************************************************************************************/
/* Debes usar modulos si agregas algun script */

/****************************************************************************************************/

// Autor: Steven Jhoan Paula Jose
// Fecha: 2025/03/12
/* 😈📔 Descripcion: Este script se encarga de esconder 
 y mostrar los articulos del contenido de la pagina principal 🥷🏼🧑🏻‍💻*/ 
export function funcionEsconderMostrar(){
    // Declaracion de variables
    const pr = document.getElementById('principal'); /* Agarra todo el contenedor principal */
    const facturacion = document.getElementById('div-facturacion'); /* Agarra el contenido de facturacion */
    const cliente = document.getElementById('div-Cliente'); /* Agarra el contenido de cliente */
    const inventario = document.getElementById('div-inventario'); /* Agarra el contenido de inventario */
    const cuentas = document.getElementById('div-cuentas'); /* Agarra el contenido de cuentas */
    const almacen = [facturacion, cliente, inventario, cuentas]; /* Almacena todas las variables en un array */

// Funcion de esconder y mostrar
function esconder(accion, div) {
    for (let i = 0; i < almacen.length; i++) { /* Oculta los que no sean exactamente el argumento que se le paso*/
        if (almacen[i] !== div) {
            almacen[i].style.display = 'none';
        }
    }
    // Esconde o muestra segun el argumento 'mostrar' o 'ocultar'
    accion === 'mostrar' ? div.style.display = 'block' : div.style.display = 'none';
};
// Boton de borrar
function borrar(){ /* Oculta todos los contenidos */
    almacen.forEach((div) => {
        esconder('ocultar', div);
    });
};
document.querySelectorAll('.borrar').forEach((boton) => {
    boton.addEventListener('click', borrar);
});

/* Botones de la barra lateral */
// Boton de facturacion
document.getElementById('btn1').addEventListener('click', (e) => {
    console.log('click en el boton de facturacion');   
    e.preventDefault();
    let accion = facturacion.style.display === 'none' || facturacion.style.display === '' ? 'mostrar' : 'ocultar'; /* Si el contenido es none devuelve el argumento 'mostrar' */
    esconder('mostrar', pr);
    esconder(accion, facturacion);
});
// Boton de Clientes
document.getElementById('btn2').addEventListener('click', (e) => {
    console.log('click en el boton de Cliente');   
    e.preventDefault();
    let accion = cliente.style.display === 'none' || cliente.style.display === '' ? 'mostrar' : 'ocultar';
    esconder('mostrar', pr);
    esconder(accion, cliente);
});
// Boton de Inventario
document.getElementById('btn3').addEventListener('click', (e) => {
    console.log('click en el boton de inventario');   
    e.preventDefault();
    let accion = inventario.style.display === 'none' || inventario.style.display === '' ? 'mostrar' : 'ocultar';
    esconder('mostrar', pr);
    esconder(accion, inventario);
});
// Boton de Cuentas
document.getElementById('btn4').addEventListener('click', (e) => {
    console.log('click en el boton de cuentas');   
    e.preventDefault();
    let accion = cuentas.style.display === 'none' || cuentas.style.display === '' ? 'mostrar' : 'ocultar';
    esconder('mostrar', pr);
    esconder(accion, cuentas);
})};