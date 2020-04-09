import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'questionsgenerator',
      storage,
      whitelist: ['auth', 'teacher'],
    },
    reducers
  );
  return persistedReducer;
};
