import React, { useState } from "react";

import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  console.log(props);
  return (
    <>
      <h1> Using Props</h1>
      <h2>No. of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
