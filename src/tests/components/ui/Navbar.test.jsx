import {mount} from 'enzyme'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { Navbar } from '../../../components/ui/Navbar'
import { types } from '../../../types/types'

const mockNavigate = jest.fn()

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() => mockNavigate

}))

describe('componente del navbar',() => {

    const contextValue = {
        dispatch: jest.fn( ),
        state: {
            name: 'brian',
            looged: false
        }
    }

    const wrapper = mount(<AuthContext.Provider value={contextValue}> 
        <MemoryRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}/>
            </Routes>
        </MemoryRouter>
    </AuthContext.Provider>)

    test('validar el snapshot', () => { 
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('brian')
    })

    test('debe de llamar de logout , llamar de navigate', () => { 
        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledWith({'type':types.logout})
        expect(mockNavigate).toHaveBeenCalledWith('/login',{replace:true})
     })
})