import {all, call} from 'redux-saga/effects';

import { tasksSagas } from './task/task.sagas';

export default function* rootSaga() {
    yield all([
        call(tasksSagas)
    ])
}