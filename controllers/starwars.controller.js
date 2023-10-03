import { clienteServices } from "../service/client-service.js";

const crearNuevaLinea = (titulo,precio,imagen)=>{
    const linea = document.createElement("div");
 
     const contenido = `<div class="starwars__box">
     <ul>
             <li class="starwars__img"><img src="${imagen}" alt=""></li>
     </ul>
     <ul class="starwars__descripcion">
         <h2 class="titulo">${titulo}</h2>
         <p>$ ${precio}</p>
         <a href="#">Ver Producto</a>
     </ul>
     </div>`;
 
     linea.innerHTML=contenido;
     return linea;
 }
 //donde se incllute
 const table = document.querySelector("[data-starwars]");

 clienteServices.listastartwars().then((data)=>{
    data.forEach((starwars)=>{
        const nuevaLinea = crearNuevaLinea(starwars.titulo,starwars.precio,starwars.imagen);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=>alert("Ocurrio un error"))