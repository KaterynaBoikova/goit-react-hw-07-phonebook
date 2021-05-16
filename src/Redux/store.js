import contactsReducer from './Phonebook/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


const middleware = getDefaultMiddleware();

const store = configureStore({
    reducer: {
        phonebook: contactsReducer,
    },
    middleware,
    //devTools: process.env.NODE_ENV === 'development',
});

export default store;