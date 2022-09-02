import { request, gql } from 'graphql-request';

// const graphqlAPI: any = process.env.GRAPHCMS_ENDPOINT;

export const getAllProducts = async () => {
    const query = gql`
        query MyQuery {
            productsConnection(first: 12) {
                edges {
                    cursor
                    node {
                        id
                        name
                        price
                        new
                        sale
                        popular
                        exclusive
                        categories {
                            name
                        }
                        images {
                            url
                        }
                    }
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
    );
    return result.productsConnection.edges;
};

export const getPopularProducts = async () => {
    const query = gql`
        query MyQuery {
            productsConnection(where: { popular: true }) {
                edges {
                    cursor
                    node {
                        id
                        name
                        price
                        new
                        sale
                        popular
                        exclusive
                        categories {
                            name
                        }
                        images {
                            url
                        }
                    }
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
    );
    return result.productsConnection.edges;
};

export const getProduct = async (id: string | string[] | undefined) => {
    const query = gql`
        query MyQuery($id: ID!) {
            product(where: { id: $id }) {
                name
                description
                price
                sizes {
                    size
                }
                images {
                    url
                }
                categories {
                    name
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
        { id },
    );
    return result.product;
};

export const getAllProductsByCategory = async (
    category: string | string[] | undefined,
) => {
    const query = gql`
        query MyQuery($category: String!) {
            productsConnection(
                first: 8
                where: { categories_some: { slug: $category } }
            ) {
                edges {
                    cursor
                    node {
                        id
                        name
                        price
                        new
                        sale
                        popular
                        exclusive
                        categories {
                            name
                        }
                        images {
                            url
                        }
                    }
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
        { category },
    );
    return result.productsConnection.edges;
};

export const getFilteredProductsByCategory = async (
    category: string,
    id: string | string[] | undefined,
) => {
    const query = gql`
        query MyQuery($category: String!, $id: ID!) {
            productsConnection(
                first: 8
                where: { id_not: $id, categories_some: { name: $category } }
            ) {
                edges {
                    cursor
                    node {
                        id
                        name
                        price
                        new
                        sale
                        popular
                        exclusive
                        categories {
                            name
                        }
                        images {
                            url
                        }
                    }
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
        { category, id },
    );
    return result.productsConnection.edges;
};

export const getAllCategories = async () => {
    const query = gql`
        query MyQuery {
            categories {
                slug
                name
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
    );
    return result.categories;
};

export const getBannerCategory = async (id: string) => {
    const query = gql`
        query MyQuery($id: ID!) {
            category(where: { id: $id }) {
                slug
                banner {
                    url
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
        { id },
    );
    return result.category;
};
