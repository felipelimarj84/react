import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { watcherSaga } from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

import rootReducer from "./modules/rootReducer";

//colocar no whitelist quais reducers persistir.
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(...middleware));

const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

export { store, persistor };
