import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import question from './question/sagas';

export default function* rootSaga() {
  return yield all([question, auth]);
}
