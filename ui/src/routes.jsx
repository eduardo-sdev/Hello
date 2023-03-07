import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { _404 } from './pages/_404'

import { App } from './App'

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: <_404 />,
    children: [
        { path: "/", element: <Home /> },
    ]
}])

