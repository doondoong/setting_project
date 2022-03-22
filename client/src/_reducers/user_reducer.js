// import { createStore } from 'redux';
import {LOGIN_USER, REGISTER_USER, CHATTING_WINDOW, AUTH_USER} from '../_action/types'

const initialState = {
    loginSuccess: '',
    register: '',
    userData: '',
    view: false,
} 

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        case CHATTING_WINDOW:
            console.log('요로로',action.view)
            return {...state, view: action.view}
            break;
        default:
            return state;
    }
}

// const store = createStore(reducer);
// console.log('store보기',store.getState())

// const listener = () => {
//     const state = store.getState()
//     console.log('리스너', state)
// }

// const unsubscribe = store.subscribe(listener)
// // unsubscribe()

// window.store = store