import {LOGIN_USER, REGISTER_USER, CHATTING_WINDOW} from '../_action/types'

const initialState = {
    loginSuccess : false,
    register : false,
    view : false
}

export default function  (state = {} , action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
        case CHATTING_WINDOW:{
            console.log(action.view)
            return {...state, view: action.view}
            break;
        }
        default:
            return state;
    }
}