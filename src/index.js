// Dependencies
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'

render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
