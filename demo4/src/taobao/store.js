import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import home from './homereducer';
import datalist from './datareducer';
import shoucang from './collectreducer'
let rootReducer = combineReducers({
    home, datalist,shoucang
})

function logger({ getState }) {
    return (next) => (action) => {
        console.log('will dispatch', action)
        // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)
        console.log('state after dispatch', getState())
        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。
        return returnValue
    }
}
const thunk = ({ dispatch, getState }) => (next) => (action) => {
    console.log('thunk');
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;