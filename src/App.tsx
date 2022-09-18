import Product from "./components/Product";
import useAxios from "./hooks/UseAxios";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {useState} from "react";
import {IProduct} from "./models";



function App() {
    const {error, loading, products, addProduct} = useAxios();
    const [modal, setModal] = useState(true);

    const onCreate = (product: IProduct) => {
        setModal(false);
        addProduct(product);
    }

    // useEffect(() =>{
    //
    // }, [modal])

    return (
        <>
            <div className="container mx-auto max-w-2xl pt-5">
                <h1 className="text-center text-5xl mb-3">TS + React.</h1>

                {loading ? <Loader/> : null}
                {error ? <Error error={error}/> : null}
                {products.map((item) => <Product product={item} key={item.id}/>)}

                {modal ? <Modal title="Create new product" onClose={() => setModal(false)}>
                    <CreateProduct onCreate={onCreate}/>
                </Modal> : null}
                {/*<Product product={ product[0] }/>*/}
                {/*<Product product={ product[1] }/>*/}
                <button onClick={() => setModal(true)}
                    className="border border-black border-2 m-2 p-2 fixed bottom-5 right-5 rounded-full bg-red-600"
                >Open modal</button>
            </div>

        </>
    )
}

export default App;
// return (
//     <h1>Hello React!!!!</h1>
// );