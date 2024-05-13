import logo from './logo.svg';
import './App.css';

import { newsArticles } from './newsArticles';
import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./Lib/firebase.config";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from './Features/newsSlice';
import Main from './Components/Main';

function App() {
    const dispatch = useDispatch();
    // const sendData = async (key, objectsToAdd, field='title') => {
    //     const collectionRef = collection(db, key);
    //     const batch = writeBatch(db);

    //     objectsToAdd.forEach((object) => {
    //         const docRef = doc(collectionRef, object[field].toLowerCase());
    //         batch.set(docRef, object);
    //     });

    //     await batch.commit();
    // }

    useEffect(() => {
        dispatch(fetchNews());
        // sendData('categorizedArticles', newsArticles)
    }, []);

    return (
        <Main />
    );
}

export default App;
