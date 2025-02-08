import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
    preloadedState: {
        cart: {
            items: [] // initial state for cart items
        },
    },
    reducer: {
        cart: cartReducer,
    },
});

export default store;
