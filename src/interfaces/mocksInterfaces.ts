export interface IProduct {
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
	characteristics:{
		id: string;
		key: string;
		value: string;
	}[];
	tags: {
		id: string;
		name: string;
	}[]
	variations?: {
		id: string;
		code: string;
		value: string;
	}[]
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

export interface ICatalog {
	id: string;
	name: string;
	position: number;
}
export interface ISubCatalog {
	id: string;
	name: string;
	position: number;
	catalog_product: {
			id: string;
	}
}