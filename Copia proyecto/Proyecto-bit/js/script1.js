function registro (){
  
let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let  telefono = document.getElementById("telefono").value;
let valor = document.getElementById("val2").value;

const emailRegex = /\S+@\S+\.\S+/


if(  nombre ==""){
   
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta el nombre',
        
      })

}

else if( !(emailRegex.test(correo)) ){

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El formato del correo no es correcto ',
        
      })
}
else if( telefono==""){

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta el número de telefono ',
        
      })
               
    }

    else if(!(Number(telefono))){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El dato ingresado no corresponde a un telefono',
            
          })
                   
        }
    else{
      Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'los datos estan bien ',
        
      })
          }

  console.log(valor) 
  switch (valor) {
      case "1":
         
          break;

          case "2":
            
          break;
          
          case "3":
              
          break;
  
         default :
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'falta seleccionar su sexo',
            
          })
          break;
  }      
  if (confirm('¿Estas seguro de enviar este formulario?')){
  
      return
       
 }
   else {

    document.tuformulario.submit()

   }
 

}

//login

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

   
  
   




        






























