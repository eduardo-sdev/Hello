import { useEffect } from "react"
import { Outlet } from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"

export function App() {
    useEffect(() => { }, [])

    return <AuthProvider>
        <Outlet />
    </AuthProvider>
}

