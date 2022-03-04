import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { DashBoard } from '../../routers/DashBoard'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext'

describe('', () => {
    test('mostrar dashboard', () => {
        const contextValue = {
            state: {
                name: 'brian',
                looged: true
            }
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/marvel']}>
                <DashBoard />
            </MemoryRouter>
        </AuthContext.Provider>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('brian');
    })
})