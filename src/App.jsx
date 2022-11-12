import { useState } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksBurgerContainer from "./components/HooksBurgerContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <HooksBurgerContainer />
      </div>
    </Provider>
  );
}

export default App;
