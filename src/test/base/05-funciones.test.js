import {getUser,getUsuarioActivo} from '../../base/05-funciones'

describe('Pruebas en 05-Funciones', () => {
    
    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username : 'Luis'
        }

        const user = getUser();
        expect(user).toEqual(userTest);
    })
    

    test('getUsuarioActivo debe retornar un objeto ', () => {
        const nombre = 'Luis';
        const usuarioActivoTest = {
            uid: 'ABC567',
            username : 'Luis'
        }

        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(usuarioActivoTest);
    })
})


