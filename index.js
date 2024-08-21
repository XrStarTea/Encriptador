function Funcion_Encriptar(){
    let texto=document.querySelector("#Ingreso_de_texto")
    if(texto.value === ""){
        alert("ingrese texto a encriptar")
    }
    for (let i = 0; i < texto.length; i++) {
    }
    let nuevo_texto = ""
    nuevo_texto = texto.value.replace('a','test')
    texto.innerHTML=""
    texto.value=""
    texto.value=nuevo_texto
    texto.innerText= nuevo_texto;
    console.log(texto);
    
    
}