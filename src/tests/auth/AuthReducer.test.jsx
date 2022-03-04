import { AuthReducer } from "../../auth/AuthReducer"
import { types } from "../../types/types"


describe('authreducer',() => {

  
    const state = {
        name: "edward"
    }

    const action = {
        type: types.login,
        payload: {
          name:'brian'
        }
      }

    test('debe retornar el valor por defecto', () => { 
        const wrapper = AuthReducer(state, {})
        expect(wrapper).toEqual(state)
     })

     test('debe colocar el nombre del usuario', () => { 
         const {name} = AuthReducer(state, action)
         expect(name).toBe('brian')
      })

      test('debe de borrar el name del usuario y lloged false', () => { 
        const action = {
            type: types.logout,
            payload: {
              name:'brian'
            }
          }
          
          const {logged} = AuthReducer(state, action)
          expect(logged).toBe(false)
       })
})