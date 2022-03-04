import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import { AppRouter } from '../../routers/AppRouter'



describe('app router', () => {
    test('validar contenido del componente', () => {
        const contextValue = {
            state: {
                logged: false
            }
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>)
        expect(wrapper.find('h4').text().trim()).toBe('login')
    })
    test('validar el componentes de marvelScreeen', () => {
        const contextValue = {
            state: {
                name: 'dev',
                logged: true
            }
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
})