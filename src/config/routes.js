import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from '@/App';
import Home from '@/modules/Home/page/Home';
import Login from '@/modules/Login/page/Login';
import RedirectTo from '@/modules/Redirect/page/RedirectTo';

import RedirectWithStatus from '@/modules/common/components/RedirectWithStatus';
import NotFoundWithStatus from '@/modules/common/components/NotFoundWithStatus';

const routes = [
    {
        path: '/',
        component: App,
        key: 'app',
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
                key: 'home',
                loadData: Home.loadData,
            },
            {
                path: '/login',
                component: Login,
                exact: true,
                key: 'login',
                loadData: Login.loadData,
            },
            {
                path: '/redirect-from',
                to: '/redirect-to',
                status: 302,
                exact: true,
                key: '/redirect-from',
                component: RedirectWithStatus,
            },
            {
                path: '/redirect-to',
                component: RedirectTo,
                exact: true,
                key: 'redirect-to',
            },
            {
                component: NotFoundWithStatus,
                key: 'not-found'
            }
        ]
    },
];

const renderRoutes = (routes) => {
    return (
        <Switch>
            {
                routes.map(route => {
                    const {
                        path,
                        exact,
                        key,
                        component,
                        strict,
                    } = route;
                    const routeProps = {
                        path,
                        exact,
                        key,
                        strict,
                    };

                    return (
                        <Route { ...routeProps } render={ props => {
                            const Component = component;
                            const mergeProps = {
                                ...props,
                                route,
                            };

                            return <Component { ...mergeProps } />
                        } } />
                    )
                })
            }
        </Switch>
    )
}

export { routes, renderRoutes }