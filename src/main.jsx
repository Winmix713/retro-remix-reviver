import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@contexts/themeContext';
import { ShopProvider } from '@contexts/shopContext';
import { Provider } from 'react-redux';
import store from './app/store';

const rootElement = document.getElementById('root');

const getStaticRoute = () => {
    if (typeof window === 'undefined') return null;
    const route = window.__STATIC_ROUTE__ ?? window.__INITIAL_ROUTE__ ?? null;
    delete window.__STATIC_ROUTE__;
    delete window.__INITIAL_ROUTE__;
    return route;
};

const staticRoute = getStaticRoute();

const RouterProvider = ({ children }) => {
    if (staticRoute) {
        return (
            <MemoryRouter initialEntries={[staticRoute]}>
                {children}
            </MemoryRouter>
        );
    }

    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            {children}
        </BrowserRouter>
    );
};

// FIX: Removed "as HTMLElement"
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Provider store={store}>
        <RouterProvider>
            <ThemeProvider>
                <ShopProvider>
                    <App />
                </ShopProvider>
            </ThemeProvider>
        </RouterProvider>
    </Provider>
);
