import React from 'react';
import { connect } from 'react-redux';

import { routeConfigure } from '../src/config';
import Header from '@/modules/common/components/Header';

class App extends React.Component {

    render() {
        const { route, isLogin } = this.props;

        return (
            <div>
                <Header
                    isLogin={ isLogin }
                />
                { routeConfigure.renderRoutes(route.routes) }
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