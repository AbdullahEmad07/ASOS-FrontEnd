export interface ICartProduct {
    id: string;
    name: string;
    description: string;
    brandName: string;
    categoryName: string;
    productTypeName: string;
    section: number;
    price: number;
    quantity: number;
    quantityInCart: number;
    rate: number;
    imageUrls: string[];
    createdAt: string; 
    updatedAt: string | null;
}


