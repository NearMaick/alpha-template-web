import { all, call, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

export function* registerEssayQuestion({ payload }) {
  const { level, field, question } = payload;

  yield call(api.post, 'essay-question', {
    level,
    field,
    question,
  });

  // history.push('/');
}

export default all([
  takeLatest(
    '@question/REGISTER_ESSAY_QUESTION_REQUEST',
    registerEssayQuestion
  ),
]);
