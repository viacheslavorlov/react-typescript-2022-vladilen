import React, {useState} from 'react';

const CreateProduct = () => {
    const [value, setValue] = useState('')

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
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
            <button
                    className="py-2 px-4 border bg-yellow-400 hover:text-white hover:bg-green-500"
                type="submit">Create</button>
        </form>
    );
};

export default CreateProduct;