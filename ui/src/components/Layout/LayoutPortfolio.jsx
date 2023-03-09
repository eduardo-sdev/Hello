import { useParams } from "react-router-dom"
import { Aside } from '../../components/Aside/'

import { AiOutlineWarning } from 'react-icons/ai'

import { useAuthContext } from '../../context/AuthContext'
import { supabase } from "../../lib/supabaseClient"

// import { v4 as uuid } from 'uuid'

import { Portfolio } from "../../pages/Portfolio"

export function LayoutPortfolio() {
    const { user } = useAuthContext()

    const { id_user, section_portfolio } = useParams()
    const NotUser = () => {
        return <div
            className="flex gap-2 items-center text-2xl text-red-400"
        >
            <AiOutlineWarning />
            Usuário Não Encontrado
        </div>
    }

    return <main
        className="flex h-screen"
    >
        <Aside
            id_user={id_user}
            section={section_portfolio}
        />
        {true
            ? <Portfolio
                id_user={id_user}
                section={section_portfolio}
            />
            : <NotUser />
        }
    </main>
}

