/*Objetivo: reconocer aquellos años que son, han sido o serán bisiestos. */
/*Creando la Variable a almacenar la fecha*/
const timeNow = new Date();
console.log(timeNow); // shows current date and time
timeNow.get

const esBisiesto = (year) => {
    return (year % 400 === 0) ? true : 
                (year % 100 === 0) ? false : 
                    year % 4 === 0;
  };
const year=2019;
const Bisiesto=esBisiesto(year);
  if (Bisiesto) {
    console.log("El año es Bisiesto");
}else{
    console.log("El año NO es Bisiesto");
}

//3 Formas de declarar variables
var variable1;
var variable1="Bedu";
let variable2; //Al acceder a esta variable sin haberla definido
// let no permite redefinir
const variable3=25;

//Operadores de JS 5 operadores
    //Aritméticos 
    
        var potencia=2;
        console.log(potencia);
        //Elevando al cubo
        potencia=potencia**3;
        console.log(potencia);
        //Sacando Raiz cubica
        potencia=potencia**(1/3);
        console.log(potencia);

        //Obteniendo Residuo 
        console.log(8%2);

    //Lógicos
    //De comparación
    //Binarios
    //De asignación.

//EJERCICIO 1 Microlearning I
//1. Una variable con tu nombre completo
var nombre="Edgar Valentin Ruiz Padilla";
//2. Una variable con tu edad
var edad=28;
//3. Una variable que almacene el valor de pi
var pi=3.1416;
console.log(pi);
//4. Una variable con tu altura en centímetros
var altura = 184;
//5. Una variable con el nombre de tu escuela primaria
var primaria="Prof Rafael Ramirez"

//Ejercicio 2
//Identifica el tipo de dato de cada una de las cinco variables definidas en la actividad anterior.
//1.1: string
//1.2: numerico
//1.3: numerico
//1.4: numerico
//1.4: string

//Ejercicio 3
//Considera el siguiente enunciado:
//En una escuela hay 3 grupos cada uno tiene 20 alumnos, para el festival de primavera se requieren 15 flores de papel china por cada alumno al
//día, y el festival tendrá una duración de 2 días. ¿Cuántas flores son necesarias?

var grupo1=20,grupo2=20,grupo3=20;
var flores=15;//flores por alumno
var festival=2;//duracion del festival por 2 dias
var totalFlores=grupo1*grupo2*grupo3*flores*festival;
console.log(totalFlores);

//Ejercicio 4
//Define las siguientes variables, usando operaciones aritméticas:
//1. La distancia entre los puntos (5,4) y (3,1) (d =√((x_2-x_1)2+(y_2-y_1)2) )
console.log('Ejercicio 4.1:');
var x1=5,x2=3;
var y1=4,y2=1;
var d=0;
d=((x2-x1)**2)+((y2-y1)**2);
console.log(d);
d=d**(1/2);
console.log(d);
//2. El área de un círculo con perímetro 3.6 (A = Π x r2)
    //formula del perimetro P=2 Π r
    //realizando despeje se obtiene A=P^2/4Π
    console.log('Ejercicio 4.2:');
    var perimetro=3.6;
    var area=(perimetro**2)/(4*pi);
    console.log(area);
///3. La hipotenusa de un triángulo rectángulo cuyos catetos tienen de tamaño 4.3 y 5.9 (a2 + b2 = c2)
    console.log('Ejercicio 4.3:');
    var cateto1=4.3;
    var cateto2=5.9
    var hipotenusa=(cateto1**2+cateto2**2)**(1/2);
    console.log(hipotenusa);

//Operador ternario ? reemplazando if
//condición ? expresión_true:expresión_false

//Microlearning 2

//Ejercicio 1:
console.log('Ejercicio 1');
    //Vamos a comenzar con el siguiente código:
    const time=25;
    let greeting;
    if(time<12 && time >=0){
    greeting="Good morning";
    }else if(time<20 && time >=12){
    greeting="Good afternoon";
    }else if(time>=20 && time<=24){
    greeting="Good evening";
    }else if(time <0 || time >24){
        greeting="Hora NO valida";
    }
    console.log(greeting);// Good afternoon
//Ejercicio 2:
//Crear un ciclo desde 0 hasta 100. //Mostrar todos los números pares en este ciclo con console.log()
console.log('Ejercicio 2');
for (let index = 0; index <= 100; index++) {
    if(index%2==0){
        console.log(index);
    }
    
}

//Ejercicio 3:
//Del siguiente fragmento, cuenta la cantidad de puntos que hay en el texto. “No comas ajos ni cebollas, porque no saquen por el olor tu
//villanería. Anda despacio; habla con resposo; pero no de manera que parezca que te escuchas a ti mismo; que toda afectación es
//mala. Come poco y cena más poco; que la salud de todo el cuerpo se fragua en la oficina del estómago. Sé templado en el
//beber, considerando que el vino demasiado ni guarda secreto, ni cumple palabra. Ten cuenta, Sancho, de no mascar a dos
//carrillos, ni de erutar delante de nadie”.
console.log('Ejercicio 3');
const parrafo='“No comas ajos ni cebollas, porque no saquen por el olor tu villanería. Anda despacio; habla con resposo; pero no de manera que parezca que te escuchas a ti mismo; que toda afectación es mala. Come poco y cena más poco; que la salud de todo el cuerpo se fragua en la oficina del estómago. Sé templado en el beber, considerando que el vino demasiado ni guarda secreto, ni cumple palabra. Ten cuenta, Sancho, de no mascar a dos carrillos, ni de erutar delante de nadie”.';
var puntos =0;
console.log(parrafo.length);
console.log(parrafo[20]);
for (let index = 0; index <=parrafo.length; index++) {
    if(parrafo[index]=="."){
        puntos+=1;
        console.log(puntos);
    }
}
console.log(puntos);


//Microlearning 3

//Ejemplo arreglos
const colors=['Red','Blue','Green']
console.log(colors)//['Red','Blue','Green']
colors[1]='Pink'
console.log(colors)//['Red','Pink','Green']

//Ejemplo objetos
const john={
    firstName:'John',
    lastName:'Doe',
    birthYear:1990
  }
    //Ejemplo de como acceder al objeto
    console.log(john.firstName)//'John'
    john.firstName='Jane'
    console.log(john.firstName)//'Jane'
    john['firstName']='Joe'
    console.log(john['firstName'])//'Joe'

//Ejemplo funcion
const square=function(number){
    return number*number;
  }
const squareOfFour=square(4);
console.log(squareOfFour);// 16

//Ejercicio 1:
// Dado el arreglo numbers compuesto solamente por números enteros mayores que cero, te toca obtener el promedio de todos sus elementos.
const numbers=[5,3,4,7,2,1,9,7,7]
function media(numeros){
    Media=0;
	for (var i =0; i < numeros.length; i++) {
		Media=numeros[i]+Media;
    	}
	Media=Media/numeros.length;
	//alert(Media);
	return Media;
}
console.log(media(numbers));

//Ejercicio 2:
//Para esta actividad vamos a tomar un arreglo con pares [key, value] y crear un objeto con sus respectivas propiedades y valores.
//Todo el proceso debe hacerse de forma programátiva.
const car=[['brand','Nissan'],['model','Versa'],['year',2020]]
const oAuto={
    brand:car[0][1],
    model:car[1][1],
    year:car[2][1]
  }
console.log(oAuto.brand);
console.log(oAuto.model);
console.log(oAuto.year);

//Ejercicio 3:
//Crear una función power que recibe dos argumentos base y exponent. La función debe retornar el resultado de elevar base a la potencia exponent.
function power(base,exponent){
	var powers=base**exponent;
    return powers;
}
console.log(power(4,1/2));