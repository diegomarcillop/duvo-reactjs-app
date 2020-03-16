import { createStore, combineReducers, compose } from 'redux';
import persistState from 'redux-localstorage';

const userDefault = {
    idUser : 0,
    userName : '',
    idRole : 0
}

function tokenReducer(state = '', action){
    switch(action.type){
        case 'SET_TOKEN':
            return action.token;
            break;
        case 'CLEAR_TOKEN':
            return '';
        default:
            return state;
    }
}

function userReducer(state = userDefault, action){
    switch(action.type){
        case 'LOGGED_IN':
            return action.user;
            break;
        case 'SIGN_OUT':
            return userDefault;
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
});

let mainEnhancer = compose(persistState(['user', 'token']));

export default createStore(rootReducer,{}, mainEnhancer);