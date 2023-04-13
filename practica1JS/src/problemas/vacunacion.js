/*Problema: permitir que una persona se vacune.
si cumple con:
1. mayor de 18 años
2. embarazada con mas de 9 semanas de gestacion , mayor de 18 años
3. personas >= 30 años este año*/

//1er caso
let gerardo = 18;

if (gerardo > 18) {
    console.log("se puede vacunar");
}

//2ndo caso forma de resolverlo
let leticia = 27;
let embarazo = true
let semanas de gestacion = 10;

if (leticia > 18 && semanas de gestacion > 9) {
    
}

//2ndo caso otra forma e resolverlo
if (leticia > 18) {
    if (embarazo) {
      if (semanas de gestacion > 9) {
        console.log("se puede vacunar");
      }  
    }
}

//3er caso
let fernando = 29
let cumpleEsteAño = false;

if (fernando >= 30 || cumpleEsteAño) {
    console.log("se puede vacunar");
}
