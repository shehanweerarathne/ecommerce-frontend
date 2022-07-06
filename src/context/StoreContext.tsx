import React, {createContext, PropsWithChildren, useContext, useState} from 'react';
import {Basket} from "../models/basket";

interface StoreContextValue {
    basket: Basket | null;
    setBasket: (basket: Basket) => void;
    removeItem: (productId: string, quantity: number) => void;
}
export const StoreContext = createContext<StoreContextValue | undefined>(undefined);
export const useStoreContext = () => {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw Error('Oops - we do not seem to be inside the provider');
    }

    return context;
}

export const StoreProvider = ({children}: PropsWithChildren<any>) => {
    const [basket, setBasket] = useState<Basket | null>(null);
    const removeItem = (productId: string, quantity: number) => {
        if (!basket) return;
        const items = [...basket.items];
        const itemIndex = items.findIndex(i => i.productId === productId);
        if (itemIndex >= 0) {
            items[itemIndex].quantity -= quantity;
            if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
            setBasket(prevState => {
                return {...prevState!, items}
            })
        }
    }

    return (
        <StoreContext.Provider value={{basket, setBasket, removeItem}}>
            {children}
        </StoreContext.Provider>
    )
  
}
