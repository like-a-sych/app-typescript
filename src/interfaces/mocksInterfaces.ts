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

export interface IUsers {
    id: string;
    email: string | null;
    phone: string;
    name: string;
    lastName: string | null;
    firmName: string | null;
    role: string;
}
