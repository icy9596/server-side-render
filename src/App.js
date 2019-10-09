import React from 'react';
import { renderRoutes } from 'react-router-config';

import { routes } from '@/config';
import Header from '@/modules/common/components/Header';
import { connect } from 'react-redux';

class App extends React.Component {

    render() {
        const { route, isLogin } = this.props;

        return (
            <div>
                <Header
                    isLogin={ isLogin }
                />
                { renderRoutes(route.routes) }
            </div>
        )
    }

}

const mapState = (state) => {
    const { main } = state;
    const { isLogin } = main;
    
    return {
        isLogin
    }
}

export default connect(mapState)(App)