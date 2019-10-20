import React from 'react';
import { Redirect } from 'react-router-dom';

import Status from './Status';

export default class RedirectWithStatus extends React.Component {

    render() {
        const { route, staticContext } = this.props;
        const { status, to } = route;

        return (
            <Status status={ status } staticContext={ staticContext }>
                <Redirect to={ to }/>
            </Status>
        )
    }

}