import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';
// import { Container } from './styles';

export default function Dashboard() {
  api.get('generator');

  const login = useSelector(state => state);

  console.tron.log(login);

  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </>
  );
}
