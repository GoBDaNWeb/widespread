import '@styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '@components/layout/Layout';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    NProgress.configure({
        showSpinner: false,
    });

    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        router.events.on('routeChangeStart', handleRouteStart);
        router.events.on('routeChangeComplete', handleRouteDone);
        router.events.on('routeChangeError', handleRouteDone);

        return () => {
            router.events.off('routeChangeStart', handleRouteStart);
            router.events.off('routeChangeComplete', handleRouteDone);
            router.events.off('routeChangeError', handleRouteDone);
        };
    }, [router.events]);

    return (
        <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
