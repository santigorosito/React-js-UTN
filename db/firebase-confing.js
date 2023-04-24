import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlJyl4myAc9rQdgJ5aKumbldgA30ZDGt0",
    authDomain: "fire-e2c6f.firebaseapp.com",
    projectId: "fire-e2c6f",
    storageBucket: "fire-e2c6f.appspot.com",
    messagingSenderId: "834254002438",
    appId: "1:834254002438:web:24ff811790993f02882687",
    measurementId: "G-H4K001Z5PY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;