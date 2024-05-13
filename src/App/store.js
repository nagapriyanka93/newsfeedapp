import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../Features/newsSlice';

export const store = configureStore({
    reducer: {
        news: newsReducer,
    },
});
