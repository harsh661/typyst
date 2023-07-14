import { ReactNode, createContext, useState } from "react";

interface User {
    uid: string
    email: string | null
    displayName: string | null
}

interface UserContextProps {
    user: User | null
    setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => {},
})

interface UserContextProviderProps {
    children: ReactNode
}

export function UserContextProvider({children}: UserContextProviderProps) {
    const [user, setUser] = useState<User | null>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}