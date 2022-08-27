// * react
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// * components
import MainPage from '@pages/Main';
import ProductPage from '@pages/Product';
import CollectionPage from '@pages/Collection';
import Layout from '@components/layout/Layout';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/collection/:slug" element={<CollectionPage />} />
            </Routes>
        </Layout>
    );
};

export default App;
