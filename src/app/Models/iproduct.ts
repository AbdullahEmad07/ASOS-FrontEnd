
export interface IProduct {
    id:              string;
    name:            string;
    description:     string;
    price:           number;
    rate:            number;
    quantity:        number;
    section:         number;
    updatedAt:       null;
    createdAt:       Date;
    brandName:       string;
    categoryName:    string;
    productTypeName: string;
    imageUrls:       string[];
}
