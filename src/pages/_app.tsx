import '@styles/index.scss';
import type { AppProps } from 'next/app';
import Layout from '@components/layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
