export interface IProductsData {
    id: string;
    name: string;
    nameFrom1C: string;
    codeFrom1C: string;
    price: number;
    volume: string;
    isReady: boolean;
    isRetailAllowed: boolean;
    brand: {
        id: string;
        name: string;
        icon: string;
    };
    images: string[];
    category: string;
    subcategory: string;
}