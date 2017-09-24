/*global module */

function classic(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
}

const nested_ternary = (state = 0, action) =>
    action.type === 'INCREMENT' ? state + 1 :
        action.type === 'DECREMENT' ? state - 1
            : state;



module.exports ={
    classic: classic,
    nested_ternary: nested_ternary
};