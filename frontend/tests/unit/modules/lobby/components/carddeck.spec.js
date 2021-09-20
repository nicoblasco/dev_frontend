import {shallowMount} from '@vue/test-utils'
import CardDesk from '@/modules/lobby/components/CardDeck'

describe('Unit test en CardDesk', () => {
    
    test('debe de renderizar el componente correctamente ', () => {

        const wrapper =  shallowMount(CardDesk)

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar tantos botones como cartas validas contenga ', () => {
        const wrapper =  shallowMount(CardDesk)
        const validVotes= [1,2,3,5,8,13,20,40,'?']
        const buttons = wrapper.findAll('button').length
        expect (validVotes.length).toEqual(buttons);
    })
})