import { getImagen } from "../../base/11-async-await"

describe('Pruebas con 11-async-await y Fetch', () => {
    test('debe de retornar URL de la imagen ', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
    
})
