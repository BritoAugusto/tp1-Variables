const number1 = parseInt(prompt('Ingresar un número'))
const number2 = parseInt(prompt('Ingresar otro número'))
const number3 = parseInt(prompt('Ingresar un último número')) 

let mayor;

if (number1 >= number2 && number1 >= number3) {
    mayor = number1;
    document.write('El número mayor es ' + mayor);
} else if (number2 >= number1 && number2 >= number3) {
    mayor = number2;
    document.write('El número mayor es ' + mayor);
} else if (number3 >= number1 && number3 >= number2) {
    mayor = number3;
    document.write('El número mayor es ' + mayor);
} else if (number1 == number2 && number1 == number3) {
    document.write('Todos los números son iguales')
}
