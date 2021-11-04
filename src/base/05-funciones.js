
export const getUser = () => ({
        uid: 'ABC123',
        username: 'Luis'
});

const user = getUser();
//console.log(user);


export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Luis');
//console.log( usuarioActivo );



