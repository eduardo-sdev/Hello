import { Link } from 'react-router-dom'
export function _404() {
    return <main
        className="fixed flex w-full h-full justify-center items-center top-0 left-0 text-xl"
    >
        Erro 404 - <Link
            className='underline'
            to="/" >Voltar para a Home</Link>
    </main>
}

