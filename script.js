// let nombreIngresado = prompt("Nombre Completo");
// let mensaje_a_mostrar = "!Bienvenido " + nombreIngresado + "!";
// console.log(mensaje_a_mostrar);

// if (confirm("Ingrese Contraseña")){
//     let contraseñaOk = false;
//     for (let i = 1; i <= 3; i++){
//         let usuario = prompt ("Ingrese -" + i + " vez");

//         if (usuario === "555"){
//             contraseñaOk = true;
//             break;
//         }
//     }

//     if (contraseñaOk){
//     alert("Contraseña Exitosa");
//     } else {
//     alert("Contrseña Incorreta")
//     }

// }


let nombre = localStorage.getItem("nombre")
if (nombre == null) {
    nombre = prompt("Ingrese usuario")
}

let campoSaludo = document.getElementById("LogIn")
campoSaludo.innerHTML = `Bienvenido ${nombre}` ;

const productos = [
    {id: 1, nombre: "Pantalon Bebé", precio: 2100, },
    {id: 2, nombre: "Chaleco Bebé", precio: 1650, },
    {id: 3, nombre: "Vestido", precio: 2500, },
    {id: 4, nombre: "Body Babé", precio: 1600, }
];

const carrito = []


localStorage.getItem("carrito")

carritoString =JSON.stringify(productos)


let btn1 = document.getElementById("product1");
btn1.addEventListener("click", () => {
    agregarElemento(1)

})

let btn2 = document.getElementById("product2");
btn2.addEventListener("click", () => {
    agregarElemento(2)

})

let btn3 = document.getElementById("product3");
btn3.addEventListener("click", () => {
    agregarElemento(3)

})

let btn4 = document.getElementById("product4");
btn4.addEventListener("click", () => {
    agregarElemento(4)
    

})

function agregarElemento(productoID) {
    let producto = productos.find((p => p.id == productoID))
    carrito.push(producto)

    alert ("Agregaste  " + producto.nombre)
}

const guardarLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))

}




    // sumarIva () {
    //     this.precio = this.precio * 1.21;

    // }

    // vender() {
    //     if (this.stock == 0){
    //         console.log( "Perdón, no hay stock disponible")
    //     } else {
    //         console.lof (" Disponible, Vendido")

    //     }
    //     this.stock--;

    // }

    // refill() {
    //     this.stock += 10;

    // }



