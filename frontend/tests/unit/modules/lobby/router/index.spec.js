import lobbyRouter from '@/modules/lobby/router/index'

describe('Unit test en el router module lobby', () => {

    test('el router debe de tener esta configuracion ', () => {
        expect (lobbyRouter).toMatchObject({
            name: 'lobby',
            component: expect.any(Function)
        })
    })
    
})
