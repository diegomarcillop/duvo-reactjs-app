import { createStore, combineReducers} from 'redux';
import courses from './reducers/courses';
const reducer = combineReducers({
    courses,
})

const store = createStore(reducer);

export default store;