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

export const getProduct = async (id: string | undefined) => {
    const query = gql`
        query MyQuery($id: ID!) {
            product(where: { id: $id }) {
                name
                description
                price
                images {
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
    return result.product;
};
