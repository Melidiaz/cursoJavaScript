
let acumulador = ``;
let totalCarrito = 0;

const ProductoUno = {nombre: "Dematologia", precio: "3000", imagen:'image0.jpg'};
const ProductoDos = {nombre: "Espirometro", precio: "4500", imagen: 'image1.jpg'};
const ProductoTres = {nombre: "Termometro", precio: "3000", imagen: 'image2.jpg'};
const ProductoCuatro = {nombre: "Odontologia", precio: "5000", imagen: 'image3.jpg'};
const ProductoCinco = {nombre: "Electrocardiograma", precio: "5000", imagen: 'image4.jpg'};
const ProductoSeis = {nombre: "Tensiometro", precio: "4000", imagen: 'image5.jpg'};

const BaseDeDatosProductos = [ProductoUno, ProductoDos, ProductoTres, ProductoCuatro, ProductoCinco, ProductoSeis];
console.log(BaseDeDatosProductos.length);

for (let i = 0; i < BaseDeDatosProductos.length; i++) {
    acumulador += `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top" src="${BaseDeDatosProductos[i].imagen}" alt=""></a>
    <div class="card-body">
        <h4 class="card-title">
            <a href="#">${BaseDeDatosProductos[i].nombre}</a>
        </h4>
        <h5> $${BaseDeDatosProductos[i].precio}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        <button onclick="agregarAlCarrito(${BaseDeDatosProductos[i].precio})">Agregar al carrito</button>
     </div>
    </div>
</div>`;
}

function agregarAlCarrito(BaseDeDatosProductos){
    totalCarrito += BaseDeDatosProductos;

console.log(totalCarrito)
document.getElementById("totalDelCarrito").innerHTML = totalCarrito;
}

document.getElementById("destacados").innerHTML = acumulador;
