import React from 'react';
import ReactDOMClient from 'react-dom/client';

const test = 'Rodrigo Cunha França';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(rootElement).render(<div>Hello React</div>);
