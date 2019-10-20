import React from 'react';

export default class Status extends React.Component {

    constructor(props) {
        super(props);

        const { status, staticContext } = props;

        staticContext && (staticContext.status = status);
    }

    render() {
        return this.props.children
    }

}