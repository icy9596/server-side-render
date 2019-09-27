import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../store';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchList();
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                <p>'HOME PAGE'</p>
                <ul>
                    {
                        list.map(({ id, title }) => (
                            <li key={ id }>{ title }</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}

Home.loadData = actions.fetchList;

const mapState = (state) => {
    const { home } = state;

    return {
        list: home.list,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchList() {
            dispatch(actions.fetchList());
        }
    }
}

export default connect(mapState, mapDispatch)(Home);