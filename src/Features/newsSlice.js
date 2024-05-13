import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../Lib/firebase.config";

const initialStateValue = {
    activeTab: 'General',
    news: {
        news: [],
        loading: 'idle',
        error: null,
    }
}

const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const collectionRef = collection(db, 'categorizedArticles');

    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.map((doc) => {
        return doc.data();
    });

    return data;
});

const newsSlice = createSlice({
    name: 'news',
    initialState: initialStateValue,
    reducers: {
        changeTab: (state, action) => {
            state.activeTab = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchNews.pending, (state) => {
            state.news.loading = 'loading';
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.news.news = action.payload;
        })
        .addCase(fetchNews.rejected, (state, action) => {
            state.loading = 'failed';
            state.news.error = action.error.message;
        });
    },
});

export const {
//     toggleModal,
//     closeModal,
    changeTab,
} = newsSlice.actions;

export {
    fetchNews,
}

export default newsSlice.reducer;
