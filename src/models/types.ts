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

type PageInfo = {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
};

type Edges = {
    cursor: string;
    node: IProduct;
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

export interface IProductEdge {
    cursor: string;
    node: IProduct;
}

export interface IProductResponse {
    edges: Edges[];
    pageInfo: PageInfo;
}

export interface IMainPageProps {
    allProducts: IProductResponse;
    popularProducts: IProductResponse;
    tShirtsCategory: ICategory;
    hoodiesCategory: ICategory;
    pantsCategory: ICategory;
}

export interface IProductPageProps {
    allProducts: IProductResponse;
    similarProducts: IProductEdge[];
    currentProduct: IProduct;
}

export interface ICategoryPageProps {
    products: IProductResponse;
}

export interface ICartProduct extends IProduct {
    disabled: boolean;
    quantity: number;
}

export interface ICartProductProps {
    product: ICartProduct;
}
