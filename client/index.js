import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, routeConfigure } from '@/config';
import axios from './request';

const preloadState = window.preloadState;
const store = createStore(preloadState, axios);
const { routes, renderRoutes } = routeConfigure;

ReactDom.render((
    <Provider store={ store }>
        <Router>
            {
                renderRoutes(routes)
            }
        </Router>
    </Provider>
), document.querySelector('#root'));