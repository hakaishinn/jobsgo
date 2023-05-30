import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

function AppProvider({ children }) {
    const [user, setUser] = useState();
    useEffect(() => {
        if (!user) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
}

export default AppProvider;
