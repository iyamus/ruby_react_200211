import React from "react"
import PropTypes from "prop-types"

// Link to other component
import HelloWorld from "./HelloWorld";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route  exact path="/" render={()=>("Home")}></Route>
          <Route  exact path="/hello" render={()=><HelloWorld greeting="App component"/> }></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
