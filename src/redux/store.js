import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filters/slice';
import { contactsReducer } from './contacts/slice';
import { authSliceReducer } from './auth/slice';

const userConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persistedUser = persistReducer(userConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    auth: persistedUser,
    contacts: contactsReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
