import React, {useEffect, useState} from 'react';
import ProductList from "./ProductList";
import LoadingComponent from "../errors/LoadingComponent";
import agent from "../../API/Agent";
import {Product} from "../../models/product";

const Catalog = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
            .then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <LoadingComponent message='Loading products...' />
    return (
        <>
            <ProductList products={products} />
        </>
    );
};

export default Catalog;
