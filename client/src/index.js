import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import AppProvider from './providers/AppProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AppProvider />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

reportWebVitals();
