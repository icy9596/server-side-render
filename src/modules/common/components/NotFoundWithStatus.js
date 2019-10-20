import React from 'react';

import Status from './Status';
import NotFound from '@/modules/common/page/NotFound';

export default class NotFountRoute extends React.Component {

    render() {
        const { staticContext } = this.props;

        return (
            <Status status={ 404 } staticContext={ staticContext }>
                <NotFound />
            </Status>
        )
    }

}