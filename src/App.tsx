import Header from './interface/Header';
import MainContent from './interface/MainContent';
import { SubsContextProvider } from './context/SubsContext';
import { ResponsiveContextProvider } from './context/ResponsiveContext';

function App() {
    return (
        <ResponsiveContextProvider>
            <div className='flex flex-col min-h-screen overflow-hidden'>
                <Header />
                <SubsContextProvider>
                    <MainContent />
                </SubsContextProvider>
            </div>
        </ResponsiveContextProvider>
    );
}

export default App;
