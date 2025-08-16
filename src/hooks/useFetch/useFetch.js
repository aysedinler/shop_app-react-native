import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {

    const [products, setProducts] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        try {

            const { data: responseData } = await axios.get(url)
            setProducts(responseData)
            setLoading(false)


        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }


    useEffect(() => {
        fetchProducts()
        
    }, [])
    return { error, loading, products }
}
export default useFetch