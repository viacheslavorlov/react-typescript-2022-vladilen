import React, {useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import Error from "./Error";


const productData : IProduct = {
    id: NaN,
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}
interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({onCreate}: CreateProductProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim().length === 0) {
            setError('Please enter valid value!');
            return;
        }
        productData.title = value;
        const response = await axios.post('https://fakestoreapi.com/products', productData)
        console.log(response.data);
        onCreate(response.data);
    }

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);

    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="name of product"
                className="py-2 px-4 border mb-2 w-full outline-0"
                value={value}
                onInput={changeHandler}
            />
            <Error error={error}/>
            <button
                    className="py-2 px-4 border bg-yellow-400 hover:text-white hover:bg-green-500"
                type="submit">Create</button>
        </form>
    );
};

export default CreateProduct;