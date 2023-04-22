import { TypeAnimation } from 'react-type-animation';
import MainText from './MainText';
import TierCard from '../components/TierCard';
import DefButton from '../components/DefButton';
import { IoIosArrowBack } from 'react-icons/io';
import { useContext } from 'react';
import { SubsContext } from '../context/SubsContext';
import { ResponsiveContext } from '../context/ResponsiveContext';

function MainContent() {
    const { showSubs, setShowSubs } = useContext(SubsContext);
    const { small } = useContext(ResponsiveContext);

    const handleShow = () => {
        setShowSubs(!showSubs);
    };

    return (
        <main className='p-20 flex-grow bg-slate-400 relative'>
            <h2
                className={`text-center font-dongle ${
                    small ? 'text-4xl' : 'text-5xl'
                }`}
            >
                🌟 ¡Descubre el mundo
                {small && (
                    <>
                        🌟
                        <br />
                    </>
                )}
                de
                <TypeAnimation
                    sequence={[
                        ' la contabilidad',
                        1000,
                        'l exito',
                        1000,
                        ' las oportunidades',
                        1000,
                        'l dinero 💸',
                        1000,
                    ]}
                    wrapper='span'
                    cursor
                    repeat={Infinity}
                />
                {small && <br />}
                con BALANCE! {!small && '🌟'}
            </h2>
            <MainText />
            <div className='flex justify-center my-7'>
                <DefButton icon={<IoIosArrowBack />} onClick={handleShow}>
                    Mostrar Planes
                </DefButton>
            </div>
            <div
                className={`overflow-hidden left-0 right-0 my-0 mx-auto ${
                    showSubs ? 'relative' : 'absolute'
                }`}
            >
                <div
                    className={`flex justify-center gap-7 overflow-hidden relative transition-transform ${
                        showSubs
                            ? 'translate-y-0 flex-wrap'
                            : '-translate-y-[90rem]'
                    }`}
                >
                    <TierCard title='BALANCE Esencial' price='21'>
                        Ideal para quienes comienzan su aventura en la
                        contabilidad, esta suscripción te brinda acceso a todos
                        nuestros cursos introductorios y material de apoyo
                        esencial para afianzar tus conocimientos básicos.
                        Disfruta de la flexibilidad de aprender a tu ritmo y
                        consulta tus dudas con nuestro equipo de profesionales.
                    </TierCard>
                    <TierCard title='BALANCE Profesional' price='44'>
                        Diseñada para profesionales y emprendedores que buscan
                        perfeccionar sus habilidades contables, esta suscripción
                        incluye acceso a todos nuestros cursos intermedios y
                        avanzados. Además, podrás participar en seminarios y
                        talleres exclusivos, y disfrutar de evaluaciones y
                        seguimiento personalizado por parte de nuestros
                        expertos.
                    </TierCard>
                    <TierCard title='BALANCE Premium' price='100'>
                        La opción más completa para aquellos que buscan una
                        experiencia de aprendizaje superior y personalizada. Con
                        esta suscripción, obtén acceso ilimitado a todos
                        nuestros cursos, seminarios, y talleres, así como
                        mentorías individuales con nuestros expertos en
                        contabilidad. Además, disfruta de prioridad en atención
                        al cliente, acceso anticipado a nuevos cursos y material
                        exclusivo para miembros Premium.
                    </TierCard>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
