import Product from "./components/Product";
import useAxios from "./hooks/UseAxios";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";

function App() {
    const {error, loading, products} = useAxios();

    return (
        <>
            <div className="container mx-auto max-w-2xl pt-5">
                <h1 className="text-center text-5xl mb-3">TS + React.</h1>

                {loading ? <Loader/> : null}
                {error ? <Error error={error}/> : null}
                {products.map((item) => <Product product={item} key={item.id}/>)}

                <Modal title="Create new product">
                    <CreateProduct/>
                </Modal>
                {/*<Product product={ product[0] }/>*/}
                {/*<Product product={ product[1] }/>*/}
            </div>

        </>
    )
}

export default App;
// return (
//     <h1>Hello React!!!!</h1>
// );