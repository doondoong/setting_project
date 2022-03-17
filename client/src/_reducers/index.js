import { combineReducers } from 'redux';
import user from './user_reducer';
// import comment from './comment_reducer';
const rootReducer = combineReducers({
    user
})

export default rootReducer;


// user, subscribe, comment와 같이 기능별로 나누어진 리덕스를 
// 컴바인리듀서를 이용하여 하나로 합쳐준다