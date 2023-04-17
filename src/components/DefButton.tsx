interface Props {
    children: string;
}

function DefButton({ children }: Props) {
    return (
        <button className='bg-coral-red-500 text-white text-lg font-semibold p-4 rounded-full hover:bg-coral-red-400 active:translate-y-0.5'>
            Suscribirse
        </button>
    );
}

export default DefButton;
