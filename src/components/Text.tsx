interface Props {
    children: string;
}

function Text({ children }: Props) {
    return <p className='text-lg max-w-3xl text-center'>{children}</p>;
}

export default Text;
