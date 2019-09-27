import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { createStore, routes } from '@/config';
import axios from './request';

const preloadState = window.preloadState;
const store = createStore(preloadState, axios);

ReactDom.render((
    <Provider store={ store }>
        <Router>
            { renderRoutes(routes) }
        </Router>
    </Provider>
), document.querySelector('#root'));