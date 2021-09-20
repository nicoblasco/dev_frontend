import {shallowMount} from '@vue/test-utils'
import Table from '@/modules/lobby/components/Table'

describe('Unit test en Table', () => {
    
    test('debe de renderizar el componente correctamente ', () => {

        const wrapper =  shallowMount(Table)

        expect(wrapper.html()).toMatchSnapshot()
    })
})