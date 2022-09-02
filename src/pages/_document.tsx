import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="ru">
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    // @ts-ignore
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta name="theme-color" content="#1f1f1f" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    // @ts-ignore
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
