import Header from './interface/Header';
import MainContent from './interface/MainContent';

function App() {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <Header />
            <MainContent />
        </div>
    );
}

export default App;
