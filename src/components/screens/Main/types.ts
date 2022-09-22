type Banner = {
    url: string;
};

export interface ICategory {
    slug: string;
    banner: Banner;
}

export interface ISectionBannerProps {
    tShirtsCategory: ICategory;
    hoodiesCategory: ICategory;
    pantsCategory: ICategory;
}

export interface IMainPageProps {
    tShirtsCategory: ICategory;
    hoodiesCategory: ICategory;
    pantsCategory: ICategory;
}
