import { Outlet } from "react-router-dom"
import { Aside } from "./components/Aside"

export function App() {
    return <div
        className="flex h-screen"
    >
        <Aside />
        <Outlet />
    </div>
}

