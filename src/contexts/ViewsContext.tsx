import { createContext, ReactNode, useState } from 'react';

interface ViewsContextProps {
    view: string;
    setView: (view: string) => void;
}

interface ViewsProviderProps {
    children: ReactNode;
}

const ViewsContext = createContext<ViewsContextProps>({} as ViewsContextProps);

function ViewsProvider({ children }: ViewsProviderProps) {
    const [view, setView] = useState('list');

    return (
        <ViewsContext.Provider value={{ view, setView }}>
            {children}
        </ViewsContext.Provider>
    );
}

export { ViewsContext, ViewsProvider };