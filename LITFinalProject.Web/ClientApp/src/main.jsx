import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { QueryParamProvider} from 'use-query-params';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <QueryParamProvider
            adapter={ReactRouter6Adapter}
           >
            <App />
        </QueryParamProvider>

    </BrowserRouter>
)
