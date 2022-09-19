import ProductsPage from "./components/pages/ProductsPage";
import About from "./components/pages/About";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>

        </>


    )
}

export default App;
// return (
//     <h1>Hello React!!!!</h1>
// );