import { request, gql } from 'graphql-request';

// const graphqlAPI: any = process.env.GRAPHCMS_ENDPOINT;

export const getAllProducts = async (
    order: string,
    sort: string | null,
    search: string,
    select: string | null,
    next?: string | null,
    prev?: string | null,
) => {
    const orderCondition = sort ? `orderBy: ${sort}_${order}` : '';
    const afterCondition = next ? `after: "${next}"` : '';
    const beforeCondition = prev ? `before: "${prev}"` : '';
    const selectCondition = select ? `${select}: true` : '';

    const query = gql`
        query MyQuery() {
            productsConnection(
                ${!prev && !next ? 'first: 12' : ''},
                ${next ? 'first: 12' : ''},
                ${prev ? 'last: 12' : ''},
                 ${orderCondition},
                ${afterCondition},
                ${beforeCondition},
                where: {name_contains: "${search}", ${selectCondition}}) {
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
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
        { order },
    );
    return result.productsConnection;
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
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
    );
    return result.productsConnection;
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

export const getAllProductsByCollection = async (
    collection: string | string[] | undefined,
) => {
    const query = gql`
        query MyQuery($collection: String!) {
            productsConnection(where: { collection: { slug: $collection } }) {
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
                        collection {
                            name
                        }
                        images {
                            url
                        }
                    }
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
        { collection },
    );
    return result.productsConnection;
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

export const getAllCollections = async () => {
    const query = gql`
        query MyQuery {
            collections {
                name
                slug
            }
        }
    `;

    const result = await request(
        'https://api-eu-central-1.hygraph.com/v2/cl76t0jfz0iof01ro719ncwpf/master',
        query,
    );
    return result.collections;
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
