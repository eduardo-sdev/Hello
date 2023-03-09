import {
    useState,
    createContext,
    useContext,
    useEffect,
    useCallback
} from "react"
import { supabase } from '../lib/supabaseClient'

const { log } = console

const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userPortfolio, setUserPortfolio] = useState([])

    const getUserData = useCallback(async () => {
        await supabase.auth.getUser().then(v => {
            if (v.data?.user) {
                setUser(v.data.user)
            }
        })
    }, [])

    useEffect(() => {
        getUserData()
    }, [])

    return <AuthContext.Provider
        value={{
            user,
            setUser,
            userPortfolio,
            setUserPortfolio,
            supabase
        }}
    >
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}

