import Header from './interface/Header';
import MainContent from './interface/MainContent';
import { SubsContextProvider } from './context/SubsContext';

function App() {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <Header />
            <SubsContextProvider>
                <MainContent />
            </SubsContextProvider>
        </div>
    );
}

export default App;
