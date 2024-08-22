let texto=document.querySelector("#Ingreso_de_texto");
let esconder=document.querySelector(".bttn-copiar");
let boton_encriptar=document.querySelector(".Boton_encriptar")
let boton_desencriptar=document.querySelector(".Boton_desencriptar")

//variables
esconder.classList.add("ocultar")
//ocultamos el boton "copiar" añadiendole la clase de ocultar que tenemos en css

function Funcion_Encriptar(texto){
    let nuevo_texto = texto.trim().toLowerCase().replaceAll("a","hjg").replaceAll("e","dsa").replaceAll("i","fds").replaceAll("o","ajk").replaceAll("u","eip");
    return nuevo_texto;
}
//creamos la funcion para encriptar
function Funcion_Desencriptar(texto){
    let nuevo_texto = texto.trim().toLowerCase().replaceAll("hjg","a").replaceAll("dsa","e").replaceAll("fds","i").replaceAll("ajk","o").replaceAll("eip","u");
    return nuevo_texto;
}
//creamos la funcion para desencriptar
boton_desencriptar.addEventListener("click",(e)=>{
    let Encriptado_texto = Funcion_Desencriptar(texto.value);
    console.log(Encriptado_texto)
})
//creamos un evento que al hacer click llame a la funcion desencriptar
boton_encriptar.addEventListener("click",(e)=>{
    let Encriptado_texto = Funcion_Encriptar(texto.value);
    console.log(Encriptado_texto)
})
//creamos un evento que al hacer click llame a la funcion encriptar
esconder.addEventListener("click", (e) => {
    let texto_copiar = texto.value;
    navigator.clipboard
      .writeText(texto_copiar)
      .then(function () {
        console.log("Texto copiado al portapapeles!");
      })
      .catch(function (error) {
        console.error("Error al copiar al portapapeles: ", error);
      });
  });
