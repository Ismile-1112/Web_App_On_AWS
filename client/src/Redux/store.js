import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducer/rootReducer";

// redux middlewares
const middlewares = [thunk];

if(process.env.NODE_ENV === "development"){
    const { logger } = require("redux-logger");

    middlewares.push(logger);
}

const store = configureStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;