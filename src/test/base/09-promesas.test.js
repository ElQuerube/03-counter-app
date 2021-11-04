import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un Héroe async', (done) => {
        const id = 1;
        const heroeData = heroes.find(h => h.id == id);
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toBe(heroeData);
                done();
        } );
    });
    
    test('debe obtener error si el héroe por id que no existe ', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(
            error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            }
        );
    });
    

    
})
