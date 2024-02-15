import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppContextProvider({children}) {
    const [app, setApp] = useState(null);

    return (
        <AppContext.Provider value={{ app, setApp }}>
            {children}
        </AppContext.Provider>
    )
}
