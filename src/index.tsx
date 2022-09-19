import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(rootElement).render(<App />);
