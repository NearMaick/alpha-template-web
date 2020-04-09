import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import { registerEssayQuestionRequest } from '../../store/modules/question/actions';

export default function Student() {
  const dispatch = useDispatch();

  function handleSubmit({ level, field, question }) {
    dispatch(registerEssayQuestionRequest(level, field, question));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="level" placeholder="Nivel da questão" />
        <Input name="field" placeholder="Disciplina" />
        <Input name="question" placeholder="Questão" />

        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
