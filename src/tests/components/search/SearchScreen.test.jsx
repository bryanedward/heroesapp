import  {mount} from 'enzyme'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { SearchScreen } from '../../../components/search/SearchScreen'

const mockNavigate = jest.fn()

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() => mockNavigate

}))

describe('comprobacion del componente serach',() => {



    test('validar el componente search', () => { 
        const wrapper = mount(<MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>)
        expect(wrapper).toMatchSnapshot()
     })

     test('validar el search del url y input', () => { 
         const wrapper = mount(<MemoryRouter initialEntries={['/search?q=batman']}>
             <SearchScreen/>
         </MemoryRouter>)
         expect(wrapper.find('input').prop('value')).toBe('batman')
      })

      test('validar el submit del formulario', () => { 
          const wrapper = mount(<MemoryRouter initialEntries={[
              '/search?q=batman'
          ]}>
              <SearchScreen/>
          </MemoryRouter>)
          wrapper.find('input').simulate('change',{
              target:{
                  value:'batman',
                  name:'value'
              }
          })
          wrapper.find('form').prop('onSubmit')({
              preventDefault(){}
          })

          expect(mockNavigate).toBeCalledWith('?q=batman')

       })
})