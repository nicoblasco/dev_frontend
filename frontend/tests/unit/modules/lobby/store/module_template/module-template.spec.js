import { createStore } from 'vuex'
import issue from '@/modules/lobby/store/issue'
import { lobbyState } from '../../../../mock-data/test-lobby-state'

const createVuexStore = (initialState) => 
    createStore({
        modules: {
            issue: {
                ...issue,
                state: { ...initialState} 
            }
        }
    })

describe('Vuex - Pruebas en el Module Template', () => {
    
    test('El state debe de tener este estado inicial ', () => {
        const store = createVuexStore ( lobbyState )
        const {issueNumber, status, currentPlayerName, members } = store.state.issue
        
        expect(issueNumber).toBeNull()
        expect(status).toBeNull()
        expect(currentPlayerName).toBeNull()
        expect(members).toEqual(lobbyState.members)
    })
    

    //Mutations
    test('mutation: setMembers ', () => {
        const store = createVuexStore ({
            issueNumber: null,
            status: null,
            currentPlayerName: null,
            members: [] })

        store.commit('issue/setMembers', lobbyState.members)

        expect( store.state.issue.members.length).toBe(3)
    })


    test('mutation: join ', () => {
        const store = createVuexStore (lobbyState)
        const join = {
            id: 1,
            playerName: 'Nico',
            status: 'voting'
        }

        store.commit('issue/join', join)

        expect( store.state.issue.members.length).toBe(4)
    })    


    test('mutation: vote ', () => {
        const store = createVuexStore ({
            issueNumber: 1,
            status: null,
            currentPlayerName: 'Nico',
            members: [{"name": "Nico", "status": "waiting"}] })
        const card = 1

        store.commit('issue/vote', card)

        const members = store.state.issue.members

        expect (members.find(m => m.value === 1)).toBeTruthy()
    })
    
    
    test('mutation: initialize ', () => {
        const store = createVuexStore (lobbyState)
        const membersArray = []        
        store.commit('issue/initialize')

        const {issueNumber, status, currentPlayerName, members } = store.state.issue

        expect(issueNumber).toBeNull()
        expect(status).toBeNull()
        expect(currentPlayerName).toBeNull()
        expect(members).toEqual(membersArray)
    }) 


    //Getters

    test('getters: getMembers ', () => {
        const store = createVuexStore (lobbyState)

        expect( store.getters['issue/getMembers'].length ).toBe(4)

    })


    //Actions
    test('actions:  loadMembers', () => {
        const store = createVuexStore ({
            issueNumber: null,
            status: null,
            currentPlayerName: null,
            members: [] })

        store.dispatch('issue/loadMembers')

        expect(store.state.issue.members.length).toBe(3)
    })
    
})
