import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import { createStore, sourceServerUrl, routeConfigure } from '@/config';
import axios from './request';

const { renderRoutes, routes } = routeConfigure;

const app = express();
const render = (req, res, store) => {
    const context = {};
    const app = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ req.url } context={ context }>
                { renderRoutes(routes) }
            </StaticRouter>
        </Provider>
    );

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
            <title>server render</title>
            <link rel="stylesheet" href="/public/client/main.css"></link>
            <script>
                window.preloadState = ${ JSON.stringify(store.getState()) }
            </script>
        </head>
        <body>
            <div id="root">
                ${ app }
            </div>
            <script src="/public/client/client.js"></script>
        </body>
        </html>
    `;

    if (context.status === 404) {
        res.status(404).send(html);
    } else if (context.status === 301 || context.status === 302) {
        res.redirect(context.status, context.url);
    } else {
        res.send(html);
    }
}

// 静态文件
app.use('/public', express.static(path.resolve(__dirname, '../')));

// 接口代理
app.use('/api', proxy(sourceServerUrl, {
    proxyReqPathResolver(req) {
        return `/ssr/api${ req.url }`
    },
}));

// server render
app.use('/', (req, res) => {
    const store = createStore(undefined, axios);
    const matchedRoutes = matchRoutes(routes, req.url);
    const promise = [];

    matchedRoutes.forEach(item => item.route.loadData && promise.push(store.dispatch(item.route.loadData())));
    Promise.all(promise).then(() => render(req, res, store));
});

app.listen(8080, () => {
    console.log('app on 8080');
});