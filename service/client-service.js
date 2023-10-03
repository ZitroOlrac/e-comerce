//conectamos al server
const listastartwars = () => fetch("http://localhost:3000/starwars").then(respuesta => respuesta.json());

const crearProducto = (titulo,precio,imagen)=>{
    fetch("http://localhost:3000/starwars",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({titulo,precio,imagen,id: uuid.v4()})
    })
}

 export const clienteServices={
    listastartwars,
    crearProducto,
 };




