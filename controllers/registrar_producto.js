import { clienteServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value
    const categoria= document.querySelector("[data-categoria]").value
    const titulo= document.querySelector("[data-nombre]").value
    const precio= document.querySelector("[data-precio]").value
    const descripcion= document.querySelector("[data-descripcion]").value

    console.log(imagen,"-",categoria,"-",titulo,"-",precio,"-",descripcion);
    clienteServices.crearProducto(titulo,precio,imagen).then(respuesta=>{
        console.log(respuesta)
    }).catch(err=>console.log(err))
});