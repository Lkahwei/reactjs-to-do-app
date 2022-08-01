import { configureStore } from "@reduxjs/toolkit";
// Middleware
import logger from 'redux-logger';

import reducers from "./root-reducer";

//Redux Saga Middleware
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = configureStore({reducer: reducers, middleware: middlewares});

sagaMiddleware.run(rootSaga);