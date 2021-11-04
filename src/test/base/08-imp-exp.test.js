import { getHeroeById,getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en funciones que Hérores', () => {
    test('debe de retornar un herore por ID ', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id == id);
        //console.log(heroeData);
        expect(heroe).toEqual(heroeData);
    })

    test('debe retornar undefined si el héroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })
    
    test('debe retornar arreglo con los héroes de DC ', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner == owner);
        expect(heroes).toEqual(heroeData);
    })

    test('debe retornar un arreglo con los héroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner == owner);

        console.log(heroes);
        console.log(heroeData);

        expect(heroes).toEqual(heroeData);
        expect(heroes.length).toBe(2);

    })
    
})
