type Categoryes = {
    name: string;
};

type Images = {
    url: string;
};

export interface IProduct {
    categoryes: Categoryes[];
    exclusive: boolean;
    id: string;
    images: Images[];
    name: string;
    new: boolean;
    popular: boolean;
    price: number;
    sale: boolean;
}

export interface IProductResponse {
    cursor: string;
    node: IProduct;
}

export interface IMainPageProps {
    allProducts: IProductResponse[];
    popularProducts: IProductResponse[];
}
