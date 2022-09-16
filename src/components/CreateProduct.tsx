import React from 'react';

const CreateProduct = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="name of product"
                className="py-2 px-4 border mb-2 w-full outline-0"
            />
            <button
                    className="py-2 px-4 border bg-yellow-400 hover:text-white hover:bg-green-500"
                type="submit">Create</button>
        </form>
    );
};

export default CreateProduct;