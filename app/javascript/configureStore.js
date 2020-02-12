// Redux
import { createStore } from "redux";
import React from "react"

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

export default class configureStore extends React.Component {
    render() {
        //createStore(reducer, preloadedState)
        const store = createStore(rootReducer, initialState);
        return store;
    }
}