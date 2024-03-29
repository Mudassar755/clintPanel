import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState,compose(applyMiddleware(...middleware ),
// window.__REDUX_DEVTOOLS_EXTENSSION__&&
// window.__REDUX_DEVTOOLS_EXTENSSION__()
));

export default store;