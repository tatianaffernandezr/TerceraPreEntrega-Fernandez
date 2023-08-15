const productos = [
    { id: 1, producto: "Sesion de Reiki Usui", precio: 4900},
    { id: 2, producto: "Sesion de Karmic Reiki", precio: 4500},
    { id: 3, producto: "Sesion de Barras de Access", precio: 6000},
    { id: 4, producto: "Sesion de Gemoterapia", precio: 2500},
    { id: 5, producto: "Meditacion", precio: 3000},
    { id: 6, producto: "Lectura de Registros Akashicos", precio: 6500},]

const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor)}
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto))
}

class Producto {
    constructor(obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat (obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
const almacenados = JSON.parse (localStorage.getItem("ListaProductos"));
const Productos = []

for (const onjeto of almacenados);
productos.push(new Producto(objeto));
for (const producto of productos);
producto.sumaIva();

cantidad <= 0 ? alert ("Debe Ingresar cantidad mayor a Cero") : alert ("Agregado")

console.dir(document.body)

/* const carrito = []

carrito.length === 0 && console.log("El carrito esta vacío!") */