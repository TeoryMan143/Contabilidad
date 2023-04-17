import DefButton from './DefButton';

interface Props {
    title: string;
    price: string;
    children: string;
}

const handleSub = () => {
    alert('No disponible por el momento');
};

function TierCard({ title, price, children }: Props) {
    return (
        <div className='max-w-sm bg-slate-200 p-10 rounded-lg mt-12 flex flex-col justify-center'>
            <div>
                <h2 className='text-center text-4xl font-dancing-script font-bold text-coral-red-500 mb-3'>
                    {title}
                </h2>
                <hr className='h-1 bg-bluse-500' />
            </div>
            <div className='flex flex-col justify-center items-center gap-9 flex-grow'>
                <h3 className='text-center text-5xl my-8'>
                    <span className='text-2xl'>$</span>
                    <span className='font-bold'>{price}</span>
                    <span className='text-2xl'>/ mes</span>
                </h3>
                <p className='text-center flex-grow'>{children}</p>

                <div className='flex flex-col justify-end'>
                    <DefButton onClick={handleSub}>Suscribirse</DefButton>
                </div>
            </div>
        </div>
    );
}

export default TierCard;
