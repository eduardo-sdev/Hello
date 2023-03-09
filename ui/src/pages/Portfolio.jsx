import { useEffect } from "react"
import {
    Home,
    Projects
} from "../components/Portfolio/"

import { useAuthContext } from '../context/AuthContext'

export function Portfolio({ id_user, section }) {
    const {
        setUserPortfolio,
        supabase
    } = useAuthContext()

    async function getInfoPortfolioByIdUser(id_user) {
        const { data, error } = await supabase.from("portfolios").select().eq("userid", id_user)
        console.log(data)
        if (data) { setUserPortfolio(data) }
        if (error) { console.log(data) }
    }

    useEffect(() => {
        getInfoPortfolioByIdUser(id_user)
    }, [])

    let page = <Home />
    switch (section) {
        case "home":
            page = <Home />
            break;
        case "projetos":
            page = <Projects />
            break;
        default:
            break;
    }
    return page
}

