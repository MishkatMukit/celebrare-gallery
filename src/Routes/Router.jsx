import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Error from '../Components/Error';
const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: '*',
        Component: Error,
    }
])

export default router;