import React from 'react';
import { renderRoutes } from 'react-router-config';

import { routes } from '@/config';
import Header from '@/modules/common/components/Header';

export default class App extends React.Component {

    render() {
        const { route } = this.props;

        return (
            <div>
                <Header />
                { renderRoutes(route.routes) }
            </div>
        )
    }

}