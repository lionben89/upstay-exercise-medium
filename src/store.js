import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reservationsReducer } from './reducers/reservations-reducer.js';
import thunk from 'redux-thunk';

export default createStore(combineReducers({ reservationsReducer }), applyMiddleware(thunk));
