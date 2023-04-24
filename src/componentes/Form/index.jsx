import { useState } from "react";

const Form = ({ getItems, itemsRef }) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputPrice, setInputPrice] = useState("");

    const addItem = async (e) => {
        e.preventDefault();
        const item = {
        title: inputTitle,
        price: inputPrice,
        };
        await addDoc(itemsRef, item);
        getItems();
        setInputTitle("");
        setInputPrice("");
    };

    return (
        <form onSubmit={addItem}>
            <input
            type="text"
            placeholder="title"
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle} />
            <input
            type="text"
            placeholder="price"
            onChange={(e) => setInputPrice(e.target.value)}
            value={inputPrice} />
            <button type="submit">Add</button>
        </form>
)
}

export default Form;
