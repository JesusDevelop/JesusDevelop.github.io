var invalido = document.querySelectorAll(".invalid-feedback");

//calculo de edad mediante fecha de nacimiento
function calcular_edad(fnacimiento,idedad,enviar) 
{
    
    var factual = new Date();
    var fcumple = new Date(fnacimiento);
    var edad = factual.getFullYear() - fcumple.getFullYear();
    var m = factual.getMonth() - fcumple.getMonth();
    if (m < 0 || (m === 0 && factual.getDate() < fcumple.getDate())) 
    {
        edad--;
    }
    //mantiene oculto la edad y desactiva el enviar
    if (edad<18){
        alert("ingrese una edad mayor a 18 años");
        document.getElementById(idedad).hidden=true;
        document.getElementById(enviar).disabled=true;
    }
    else{
        document.getElementById(idedad).hidden=false;
        document.getElementById(enviar).disabled=false;
        document.getElementById(idedad).readOnly=true;
    }

    return edad;
    
}

//funcion para pasar a mayusculas
function mayus(idinput){

    idinput.value=idinput.value.toUpperCase();

}

// funcion para validar minimo y maximo de caracteres
function minmax(idinput,accion){
    min=5;
    max=100;
     
   var longitud=idinput.value; //longitud del valor ingresado
  if(accion=='nombre'){
    alert("condicion true");
  }
    //comparando si es menor o mayor de lo aceptado
   if(longitud.length<min || longitud.length>max){
    idinput.focus(); // hace focus en el input que requiere ingresar mas carateres
    document.getElementById("submitButton").disabled=true;//dashabilitar boton enviar
    idinput.style.borderColor = 'red';// cambia de color el borde a rojo
   }

   else{
    document.getElementById("submitButton").disabled=false;
    idinput.style.borderColor = 'grey';
   }
}


//objeto que captura los datos del formulario
var tabla={
    nombre: document.getElementById("nombre"),
    apellido: document.getElementById("apellido"),
    email: document.getElementById("email"),
    fnac: document.getElementById("fnac"),
    telefono:document.getElementById("telefono"),
    comentarios:document.getElementById("comentarios")
};


//evento que acciona el boton de submit
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener('submit', validarFormulario); 
});
  
  //funcion que se ejecuta al realizar el submit
  function validarFormulario(evento) {
    evento.preventDefault();
    let claves = Object.keys(tabla); // claves = ["nombre", "apellido", "email"]
    
    for(let i=0; i< claves.length; i++){
      let clave = claves[i];
      console.log(tabla[clave].value);

      if( tabla[clave].value==""){
        alert(`El campo ${claves[i]} no puede estar vacio`);

        return;
      }
      if( claves[i]!="comentarios" & claves[i]!="telefono" & ((tabla[clave].value.length > 0 & tabla[clave].value.length < 5)  || tabla[clave].value.length>=100)) {
        alert(`El campo ${claves[i]} debe tener entre 5 y 100 caracteres`);
        return;
    }
    if( claves[i]=="telefono" & tabla[clave].value.length < 5) {
        alert(`El campo ${claves[i]} debe tener minimo 5 caracteres`);
        return;
    }
  }
  this.submit();
}
//////////////////////////////// SECCION LOGIN ////////////////////////////////////

var login={
    usuario: document.getElementById("usuario"),
    contrasena: document.getElementById("contrasena")
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener('submit', validarLogin);
}); 

function validarLogin(evento){

    evento.preventDefault();
    let claves = Object.keys(login); // claves = ["usuario", "contrasena"]
    
    for(let i=0; i< claves.length; i++){
      let clave = claves[i];

      if( login[clave].value==""){
        alert(`El campo ${claves[i]} no puede estar vacio`);
        return;
      }

      if( (login[clave].value.length > 0 & login[clave].value.length < 5)  || login[clave].value.length>=100) {
        alert(`El campo ${claves[i]} debe tener entre 5 y 100 caracteres`);
        return;
      }
    }
    this.submit;
}