import React, {useState} from "react"
// import PropTypes from "prop-types" 

// Using react-redux
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

function getThings() {
  return {
    type: GET_THINGS_REQUEST
  };
};

 class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        {/* adding button */}
        <button className="getThingsBtn" onClick={() => 
          this.props.getThings()
        }>Get Things</button>
      </React.Fragment>
    );
  }
}
HelloWorld.propTypes = {
  greeting: PropTypes.string
};

// Using selector
const structureSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

//첫번째 인자. "상태를 전달하는 props". 
//두번째 인자. Redux의 Dispatch(값을 변경시키는 함수)를 React component의 props로 연결시켜주는 정보를 담는 함수로 공급.

export default connect(structureSelector, mapDispatchToProps)(HelloWorld);

