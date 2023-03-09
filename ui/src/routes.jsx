import { createBrowserRouter } from 'react-router-dom'

import { LayoutLandingPage } from './components/Layout/LayoutLandingPage'
import { LayoutAdmin } from './components/Layout/LayoutAdmin'
import { LayoutPortfolio } from './components/Layout/LayoutPortfolio'
import { LayoutProfile } from './components/Layout/LayoutProfile'

import { RegisterLogin } from './pages/RegisterLogin'

import { _404 } from './pages/_404'
import { App } from './App'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <_404 />,
        children: [
            { path: "/", element: <LayoutLandingPage /> },
            { path: "/landingpage", element: <LayoutLandingPage /> },
            { path: "/registar-login", element: <RegisterLogin /> },

            { path: "/portfolio/:id_user", element: <LayoutPortfolio /> },
            { path: "/portfolio/:id_user/:section_portfolio", element: <LayoutPortfolio /> },

            { path: "/admin/:id_admin", element: <LayoutAdmin /> },
            { path: "/perfil/:section_profile", element: <LayoutProfile /> },
        ]
    },
])

