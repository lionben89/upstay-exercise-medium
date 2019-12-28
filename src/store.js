import { combineReducers, createStore } from 'redux';
import { reservationsReducer } from './reducers/reservations-reducer.js';

export default createStore(combineReducers({ reservationsReducer }));
