import { takeEvery, put, call } from 'redux-saga/effects';

const ASYNC_ACTION = 'ASYNC_ACTION';

export function* sagaWatcher() {
  yield takeEvery(ASYNC_ACTION, sagaWorker);
}

//пример асинхронного действия с событиями
function* sagaWorker() {
  const payload = yield call(fetch('https://jsonplaceholder.typicode.com'));
  yield put({ type: ASYNC_ACTION, payload });
}
