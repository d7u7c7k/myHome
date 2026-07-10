import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFa2PNTadQF2RUJ_u3E8ejGJfBfB2rLoQ",
    authDomain: "raahoodb.firebaseapp.com",
    projectId: "raahoodb",
    storageBucket: "raahoodb.firebasestorage.app",
    messagingSenderId: "1004720452919",
    appId: "1:1004720452919:web:bbd376099188e9270596b2",
    measurementId: "G-S2Z9BQ9Q8B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
