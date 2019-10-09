import { combineReducers } from 'redux';

const UPDATE_IS_LOGIN = 'UPDATE_IS_LOGIN';

const isLogin = (state=false, action) => {
    switch(action.type) {
        case UPDATE_IS_LOGIN:
            return action.payload
        default:
            return state
    }
}

export const reducer = combineReducers({
    isLogin,
})