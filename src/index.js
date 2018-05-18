import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
//import 'semantic-ui-css/semantic.min.css';
import './semantic/out/semantic.min.css'
import './index.css';
import peopleReducer from './reducers/peopleReducer'
//import 'react-virtualized/styles.css';

//const store = createStore(peopleReducer,  /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(peopleReducer, /* preloadedState, */composeEnhancers( applyMiddleware(thunkMiddleware) ))

ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
