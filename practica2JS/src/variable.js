var persona1 = {
    id: 123,
    nombre: "Gerardo",
    edad: 31,
    casado: false,
    email: "treck8ramirez@gmail.com",
    num_galletas: 5,
    "primer apellido": "Muñoz"// este dato sólo puedo consultarlo utilizando la notación llave cuadrada -> persona1["primer apellido"]
}

var persona2 = {
    id: 124,
    nombre: "Fabiola",
    edad: 32,
    casado: true,
    email: "fabiola.gilbon@correo.com",
    num_galletas: 15,
}

//como consultar la información de mis objetos literales
//consulta por notación de punto
console.log("por punto -> Hola, mi nombre es " + persona1.nombre + " tengo " + persona1.edad + " años ")
//consulta por notación de llaves cuadradas
console.log("por llaves -> Hola, mi nombre es " + persona1["nombre"] +
    " " + persona1["primer apellido"] + " tengo " + persona1["edad"] + " años " + persona1.direccion)

//in me ayuda a verificar si una clave está en mi objeto literal
console.log("direccion" in persona1)//false
console.log("nombre" in persona1)//true

var nombreEnPersona = "direccion" in persona1
console.log(nombreEnPersona)//puedo almacenar el resultado

console.log(Object.keys(persona1))