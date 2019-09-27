import { combineReducers } from 'redux';

// action types
const CHANGE_LIST = 'CHANGE_LIST';

// reducers
const list = (state=[], { type, payload }) => {
    switch(type) {
        case CHANGE_LIST:
            return payload
        default:
            return state
    }
};

export const actionTypes = {
    CHANGE_LIST
}

export const actions = {
    fetchList: () => (dispatch, _, axios) => {
        // console.log('fetchlist',axios)
        return axios.get('/api/news.json?secret=PP87ANTIPIRATE').then(res => res.data.data).then(list => dispatch(actions.changeList(list)));
    },
    changeList: (payload) => ({
        type: CHANGE_LIST,
        payload,
    }),
};

export const reducer = combineReducers({
    list,
})