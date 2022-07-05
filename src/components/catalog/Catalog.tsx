import React, {Fragment, useEffect, useState} from 'react';
import {Product} from "../../models/product";
import LoadingComponent from "../errors/LoadingComponent";
import ProductList from "./ProductList";
import axios from "axios";



const Catalog = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        (
            async ()=> {
                const {data} = await axios.create().get('Product');

                setProducts(data);
                setLoading(false)

            }
        )();
    },[]);
    // const Catalog = () => {
    //     const [products, setProducts] = useState<Product[]>([]);
    //     useEffect(()=>{
    //         agent.Catalog.list().then(products=>setProducts(products))
    //     },[]);

    if (loading) return <LoadingComponent message='Loading products...' />
    return (
        <Fragment>
            <ProductList products={products}/>

        </Fragment>
    );
};

export default Catalog;
