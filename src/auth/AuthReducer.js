import { types } from "../types/types";

const loginAuth = {
    types: types.login,
    payload: {
        name:'edward',
        password: '123'
    }
}

export const AuthReducer = ( state ={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }            
            break;
        case types.logout:
            return {
                logged: false
            }
            break
    
        default:
            return state;
    }
}