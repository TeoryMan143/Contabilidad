import { FaBalanceScale } from 'react-icons/fa';

function Header() {
    return (
        <header className='bg-bluse-700 flex justify-center'>
            <div className='flex items-center sm:gap-6 flex-col sm:flex-row'>
                <FaBalanceScale className='text-8xl text-coral-red-400' />
                <h1 className='font-tilt text-coral-red-400 text-8xl'>
                    Balance
                </h1>
            </div>
        </header>
    );
}

export default Header;
