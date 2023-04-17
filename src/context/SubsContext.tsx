import { createContext, useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

interface ISubsContext {
    showSubs: boolean;
    setShowSubs: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubsContext = createContext<ISubsContext>({
    showSubs: true,
    setShowSubs: () => true,
});

export function SubsContextProvider({ children }: Props) {
    const [showSubs, setShowSubs] = useState(false);

    return (
        <SubsContext.Provider value={{ showSubs, setShowSubs }}>
            {children}
        </SubsContext.Provider>
    );
}
