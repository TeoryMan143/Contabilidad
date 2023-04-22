import { createContext, useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

interface IResponsiveContext {
    small: boolean;
    setSmall: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResponsiveContext = createContext<IResponsiveContext>({
    small: false,
    setSmall: () => false,
});

export function ResponsiveContextProvider({ children }: Props) {
    const [small, setSmall] = useState(false);

    return (
        <ResponsiveContext.Provider value={{ small, setSmall }}>
            {children}
        </ResponsiveContext.Provider>
    );
}
