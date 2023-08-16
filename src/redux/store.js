import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { imageReducer } from './reducer';
const persistConfig = {
    key: 'root',
    storage,
};

const imagePersistConfig = {
    key: 'images',
    storage,
};
const rootReducers = (state, action) => {
    if (action.type === 'clear/clearStorages') {
        storage.removeItem('persist:root');
        state = {};
    }
    return appReducers(state, action);
};

const appReducers = combineReducers({
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