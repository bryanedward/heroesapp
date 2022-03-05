import {mount} from 'enzyme'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { types } from '../../../types/types'


const mockNavigate = jest.fn()

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() => mockNavigate
}))

const contextValue = {
    dispatch: jest.fn(),
    state:{
        name: 'edward'
    }
}
const wrapper = mount(<AuthContext.Provider value={contextValue}>
    <MemoryRouter initialEntries={['/login']}>
        <Routes>
            <Route path='/login' element={<LoginScreen/>}/>
        </Routes>
    </MemoryRouter>
</AuthContext.Provider>)


describe('componente del login', () => {
    test('validar el componente login', () => { 
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h4').text().trim()).toBe('login')
     })
     test('validar el login del button', () => { 
        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {name:'edward'}
        })
        expect(mockNavigate).toHaveBeenCalledWith("/marvel", {"replace": true})
      })
})