var nombre=document.getElementById("nombre");
var cedula=document.getElementById("cedula");
var correo=document.getElementById("correo");
var telefono=document.getElementById("telefono");
var radiobut=document.getElementsByName("pago");
var radioButElegido = false;
var error=document.getElementById("error");

error.style.color="red";
function validar_campos(){
    var mensajes_error=[];
    
    if(nombre.value===null||nombre.value===""){
        mensajes_error.push("Ingrese el nombre");
    }
    if(cedula.value===null||cedula.value===""){
        mensajes_error.push("Ingrese la cedula");
    }
    if(correo.value===null||correo.value===""){
    mensajes_error.push("Ingrese  el correo");
    }
    
        if( !(/^\d{10}$/.test(telefono.value)) ) {

            mensajes_error.push('Formato de teléfono no válido');
            
            }

           
            
            
        
    
    for (var i=0; i<radiobut.length; i++) {if (radiobut[i].checked == true) { radioButElegido=true;} }

    if (radioButElegido == false){
       // msgValidacion = msgValidacion+'<p>(*) No hay elegido tratamiento sr. o sra. </p> ';
       mensajes_error.push("No ha elegido metodo de pago");
    }
    
    error.innerHTML=mensajes_error.join("<br>");
    
    return false;
}