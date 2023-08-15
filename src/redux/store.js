import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { authReducer } from './reducer';
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
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
    reducer: persistedReducer,
});
export let persitor = persistStore(store);