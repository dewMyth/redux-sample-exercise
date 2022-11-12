import React, { useState } from "react";

import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <>
      <h1> Using Props</h1>
      <h2>No. of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Creams</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
