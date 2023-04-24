import { collection, addDoc } from "firebase/firestore"; 
import db from "./firebase-confing.js";
import products from "../products.js";

const itemRef = collection(db, "item");

const promises = products.map(product => addDoc(itemRef, product));

Promise.all(promises)
  .then(() => {
    console.log("done")
    process.exit(0)
  })