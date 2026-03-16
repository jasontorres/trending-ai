import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import App from './App';

import { getPortfolioItems } from './contentService';

export function render(url: string) {
  const helmetContext: any = {};
  
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext as { helmet: HelmetServerState };
  
  const head = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  `;

  return { html, head };
}

export function getRoutes() {
  const items = getPortfolioItems();
  return [
    '/',
    '/work',
    '/thoughts',
    ...items.filter(i => i.slug).map(i => `/post/${i.slug}`)
  ];
}
