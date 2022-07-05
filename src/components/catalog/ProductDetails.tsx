import React,{useState,useEffect} from 'react';
import {Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import agent from "../../API/Agent";
import NotFound from "../errors/NotFound";
import LoadingComponent from "../errors/LoadingComponent";
import {Product} from "../../models/product";
import axios from "axios";

const ProductDetails = () => {
    const {id}=useParams<{id:string}>();
    const [product,setProduct] = useState<Product | null>(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        agent.Catalog.details(id)
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]);


    if (loading) return <LoadingComponent message='Loading product...' />
    if (!product) return <NotFound />

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant={'h6'}>{product.name}</Typography>
                <Divider/>
                <Typography color={'secondary'} variant={'h6'}>   Rs.{product.price.toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>In Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    );
};

export default ProductDetails;
