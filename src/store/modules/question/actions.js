export function registerEssayQuestionRequest(level, field, question) {
  return {
    type: '@question/REGISTER_ESSAY_QUESTION_REQUEST',
    payload: { level, field, question },
  };
}
