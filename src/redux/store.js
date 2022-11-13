import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export let persistor = persistStore(store);

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
