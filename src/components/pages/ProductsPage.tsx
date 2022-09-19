import React, {useContext} from 'react';
import useAxios from "../../hooks/UseAxios";
import {ModalContext} from "../ModalContext";
import {IProduct} from "../../models";
import Loader from "../Loader";
import Error from "../Error";
import Product from "../Product";
import Modal from "../Modal";
import CreateProduct from "../CreateProduct";

const ProductsPage = () => {
    const {error, loading, products, addProduct} = useAxios();
    const {open, close, modal} = useContext(ModalContext)

    const onCreate = (product: IProduct) => {
        close()
        addProduct(product);
    }

    return (
        <>

            <div className="container mx-auto max-w-2xl pt-5">
                <h1 className="text-center text-5xl mb-3">TS + React.</h1>

                {loading ? <Loader/> : null}
                {error ? <Error error={error}/> : null}
                {products.map((item) => <Product product={item} key={item.id}/>)}

                {modal ? <Modal title="Create new product" onClose={close}>
                    <CreateProduct onCreate={onCreate}/>
                </Modal> : null}
                {/*<Product product={ product[0] }/>*/}
                {/*<Product product={ product[1] }/>*/}
                <button onClick={open}
                        className="border border-black border-2 m-2 p-2 fixed bottom-5 right-5 rounded-full bg-red-600"
                >Open modal</button>
            </div>

        </>
    )
};

export default ProductsPage;