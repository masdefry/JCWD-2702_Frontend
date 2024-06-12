// import { configureStore } from '@reduxjs/toolkit';

// import userSlice from './slices/userSlice';
// import productSlice from './slices/productSlice'

// export const store = configureStore({
//     reducer: {
//         user: userSlice, 
//         product: productSlice
//     }
// })

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from './slices/userSlice';
import productSlice from './slices/productSlice'

const persistConfig = {
  key: 'data',
  storage,
};

const rootReducer = combineReducers({
    user: userSlice,
    product: productSlice,
});
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
