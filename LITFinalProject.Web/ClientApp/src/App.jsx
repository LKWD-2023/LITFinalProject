import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Upload from './pages/Upload';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Upload' element={<Upload />} />
            </Routes>
        </Layout>

    );
}

export default App;