import React from "react"
import PropTypes from "prop-types"

// Link to other component
import HelloWorld from "./HelloWorld";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Using redux
import { Provider } from "react-redux";
import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      // Redux installed in your app with Provider
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home")}></Route>
            <Route exact path="/hello" render={() => <HelloWorld greeting="App component" />}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
