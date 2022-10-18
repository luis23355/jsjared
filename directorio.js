

let amigos=[]
let btnguardar =document.querySelector("#btnguardar");
let btncancelar =document.querySelector("#btncancelar");
let btneliminar =document.querySelector("#btneliminar");
let lista=document.querySelector(".listaAmigos");
let formulario = document.querySelector("#formulario");

function limpiar()
{
    formulario[0].value=""; 
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

btncancelar.addEventListener("click",(event)=>
{
    limpiar();
    event.preventDefault(); 
});

function pintar()
{
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}" />Detalles</button>`;  
            
            
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("muestraDetalles");
        for(let i = 0; i<botones.length; i++)
        {
            const element = botones[i];
            element.addEventListener("click",()=>
            {
                showDetalles(element.children[0].value);
            })
        }
    }
    else
    {
        lista.innerHTML="<h2> No tienes amigos</h2>";
    }
}

function showDetalles(tel)
{
    // alert(tel);
    let detalles =document.getElementById("detallesAmigo");
    let amigo=amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a;
        }
    });

    detalles.innerHTML=`<img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Teléfono:</span>${amigo.telefono}</p>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button>Cerrar</button>`;
    detalles.classList.remove("oculto");

}

btnguardar.addEventListener("click",(event)=>
{
    if(formulario[0].value=="" && formulario[1].value=="" && formulario[2].value=="" && formulario[3].value=="")
    {
        // alert("Rellena todos los campos")
        let error=document.getElementById("error");
        error.classList.remove("oculto_error");
        event.preventDefault();
    }
    else
    {
        let contacto=
    {
    nombre:formulario["nombre"].value,
    telefono:formulario["telefono"].value,
    correo:formulario["correo"].value,
    foto:formulario["foto"].value
    };

    amigos.push(contacto);
    limpiar();
    pintar()
    event.preventDefault();
    }
    
});



document.getElementById("[btnguardar").remove();


