interface Props {
    children: string;
    icon?: string | JSX.Element;
    onClick: () => void;
}

function DefButton({ children, icon, onClick }: Props) {
    return (
        <button
            className='bg-coral-red-500 text-white text-lg font-semibold p-4 rounded-full hover:bg-coral-red-400 active:translate-y-0.5 transition-all flex items-center'
            onClick={onClick}
        >
            {icon && <span className='mr-3 text-3xl '>{icon}</span>}
            <span>{children}</span>
        </button>
    );
}

export default DefButton;
