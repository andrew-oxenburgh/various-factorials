/*global module */

function switch_statement(state = 0, action) {
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

const if_statement = (defaultCase, type) => {
    const cases = {
        'INCREMENT': ()=> (defaultCase + 1),
        'DECREMENT': ()=> (defaultCase - 1)
    };
    if (type.type in cases) {
        return cases[type.type]();
    } else {
        return defaultCase;
    }
};


module.exports ={
    switch_statement: switch_statement,
    nested_ternary: nested_ternary,
    if_statement: if_statement
};