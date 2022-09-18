type Categoryes = {
    name: string;
};

type Images = {
    url: string;
};

type Size = {
    size: string;
};
type Category = {
    name: string;
};

type Banner = {
    url: string;
};

export interface ICategory {
    slug: string;
    banner: Banner;
}
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
    description: string;
    sizes: Size[];
    categories: Category[];
}

export interface IProductResponse {
    cursor: string;
    node: IProduct;
}

export interface IMainPageProps {
    allProducts: IProductResponse[];
    popularProducts: IProductResponse[];
    tShirtsCategory: ICategory;
    hoodiesCategory: ICategory;
    pantsCategory: ICategory;
}

export interface IProductPageProps {
    allProducts: IProductResponse[];
    similarProducts: IProductResponse[];
    product: IProduct;
}
export interface ICategoryPageProps {
    products: IProductResponse[];
}
