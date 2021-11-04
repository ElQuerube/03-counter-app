import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Prueba debe retornar Hola Fernando ', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre)
        expect(saludo).toBe('Hola ' + nombre)
    })

    test('Prueba debe retornar Hola Querube ', () => {
        const nombre = '';
        const saludo = getSaludo(nombre)
        expect(saludo).toBe('Hola Querube')
    })    
})
