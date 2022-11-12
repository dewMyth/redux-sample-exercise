import { useState } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksBurgerContainer from "./components/HooksBurgerContainer";
import UserContainer from "./async/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <hr />
        <IceCreamContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <HooksBurgerContainer />
      </div>
    </Provider>
  );
}

export default App;
