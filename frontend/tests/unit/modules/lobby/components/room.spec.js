import {shallowMount} from '@vue/test-utils'
import Room from '@/modules/lobby/components/Room'

describe('Unit test en Room', () => {
    
    test('debe de renderizar el componente correctamente ', () => {

        const wrapper =  shallowMount(Room)

        expect(wrapper.html()).toMatchSnapshot()
    })
})