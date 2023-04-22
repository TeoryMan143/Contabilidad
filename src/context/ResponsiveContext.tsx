import { createContext, useState, useEffect } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

interface IResponsiveContext {
    small: boolean;
    dimensions?: object;
}

export const ResponsiveContext = createContext<IResponsiveContext>({
    small: false,
    dimensions: {},
});

export function ResponsiveContextProvider({ children }: Props) {
    const [small, setSmall] = useState(false);

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setSmall(dimensions.width < 640);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dimensions]);

    return (
        <ResponsiveContext.Provider value={{ small }}>
            {children}
        </ResponsiveContext.Provider>
    );
}
