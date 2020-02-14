// Redux
import { createStore } from "redux";

const initialState = {
    things: []
};

function rootReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        default:
            return state
    }
}

export default function configureStore() {
    //createStore(reducer, preloadedState)
    const store = createStore(rootReducer, initialState);
    return store;
}