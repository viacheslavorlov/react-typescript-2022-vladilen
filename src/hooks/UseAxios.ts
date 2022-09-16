import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

const useAxios = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const params = {method: 'get', url: 'https://fakestoreapi.com/products?limit=5', responseType: 'application/json'};
    async function fetchProducts() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IProduct[]>(params.url);
            setProducts(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
            console.log(error)
        }

    }

    useEffect(() => {
        fetchProducts();
    }, []);
    return {error, loading, products}
}

export default useAxios;