import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { authReducer, imageReducer } from './reducer';
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['auth'],
};

const authPersistConfig = {
    key: 'auth',
    // storage,
    storage: storageSession,
    // blacklist: ['isAuthenticated'],
};

const imagePersistConfig = {
    key: 'images',
    storage,
};
const rootReducers = (state, action) => {
    if (action.type === 'clear/clearStorages') {
        storage.removeItem('persist:root');
        sessionStorage.removeItem('persist:auth');
        state = {};
    }
    return appReducers(state, action);
};

const appReducers = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    image: persistReducer(imagePersistConfig, imageReducer),
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persitor = persistStore(store);