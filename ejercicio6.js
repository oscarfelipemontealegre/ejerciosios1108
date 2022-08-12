var matricula= 1000000
var nota1 =parseInt(prompt('ingrese el primer numero1'))
var nota2 =parseInt(prompt('ingrese el primer numero2'))
var nota3 =parseInt(prompt('ingrese el primer numero3'))
var nota4 =parseInt(prompt('ingrese el primer numero4'))

var promedio = ((nota1+nota2+nota3+nota4)/4)
var descuento1 = matricula * (5 / 100)
var descuento2 = matricula * (50 / 100)

function descuento (){
    if (promedio <= 3) {
        console.log('no tine descuento')
    } else if(promedio >= 3 && promedio <= 4 ){
        
       console.log('tiene un descuento del 5%')

       } else if (promedio >4){

       
       console.log('aplique el descuento de 50%')
       }
}
descuento()