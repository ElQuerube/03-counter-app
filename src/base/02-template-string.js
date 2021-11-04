


const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre) {
    if(!nombre) {
        return 'Hola Querube'
    }
    else {
        return 'Hola ' + nombre;
    }
    
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );