export interface ProductsResponse {
    status:   number;
    products: Product[];
}

export interface Product {
    id:            number;
    creation_date: Date;
    updated_date:  Date;
    product_code:  string;
    name:          string;
    brand:         string;
    hardware_code: string;
    price:         number;
    imageUrl:      string;
}
