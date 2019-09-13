import { createStore } from 'redux';
import reducers from '../reducers/reducers.js';

const initialState = {
    todos: [],
};
const store = createStore(reducers, initialState);

export default store;