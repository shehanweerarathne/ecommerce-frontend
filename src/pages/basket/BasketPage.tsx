import React, {useEffect} from 'react';

import { Typography } from "@mui/material";
import { useState } from "react";

import {Basket} from "../../models/basket";
import LoadingComponent from "../../components/errors/LoadingComponent";
import axios from "axios";
import agent from "../../API/Agent";
axios.defaults.withCredentials = true;
const BasketPage = () => {
    const  [basket, setBasket] = useState<Basket | null>(null);
    // const { basket, setBasket, removeItem } = useStoreContext();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        agent.Basket.get()
            .then(basket=>setBasket(basket))
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false));
    },[]);



    if(loading) return <LoadingComponent message={'Loading basket...'}/>

    if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>
    return (
        <h1>BuyerId = {basket.buyerId}</h1>
    );
    

};

export default BasketPage;
