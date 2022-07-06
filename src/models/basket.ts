export interface BasketItem {
    productId: string;
    name: string;
    price: number;
    pictureUrl: string;
    brand: string;
    type: string;
    quantity: number;
}

export interface Basket {
    id: string;
    buyerId: string;
    items: BasketItem[];
}
