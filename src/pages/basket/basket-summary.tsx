import React from 'react';
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import {useStoreContext} from "../../context/StoreContext";
import {currencyFormat} from "../../util/util";

const BasketSummary = () => {
    const {basket} = useStoreContext();




    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(500)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">10000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(5000)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default BasketSummary;