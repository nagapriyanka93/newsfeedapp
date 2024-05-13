import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA3rzNaKU5M5DPiWwx8KUrnHcdepkHoSHI",
    authDomain: "news-feed-app-396fd.firebaseapp.com",
    projectId: "news-feed-app-396fd",
    storageBucket: "news-feed-app-396fd.appspot.com",
    messagingSenderId: "3116138845",
    appId: "1:3116138845:web:595845d23d700b89d4a8b4"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

const storage = getStorage();

export {
    auth,
    provider,
    db,
    storage,
};
