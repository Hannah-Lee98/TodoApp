import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './Stores/todo'
import 'normalize.css'
import './index.css';
import App from './App';
import './Stores/todo.test'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
