import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Authentication: React.FC = () => {
    const [signup, setSignup] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [animate, setAnimate] = useState<boolean>(true);

    return (
        <div className='flex flex-col justify-center items-center gap-[49px] h-screen bg-[#131319]'>
            <div>
                <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.53118 7.66652C2.53118 4.83026 4.83042 2.53102 7.66667 2.53102C10.5029 2.53102 12.8022 4.83026 12.8022 7.66652C12.8022 10.5028 10.5029 12.802 7.66667 12.802C4.83042 12.802 2.53118 10.5028 2.53118 7.66652ZM7.66667 0.531024C3.72585 0.531024 0.531177 3.72569 0.531177 7.66652C0.531177 11.6073 3.72585 14.802 7.66667 14.802C11.6075 14.802 14.8022 11.6073 14.8022 7.66652C14.8022 3.72569 11.6075 0.531024 7.66667 0.531024ZM12.934 26.3336L3.46659 31.5709V21.0963L12.934 26.3336ZM3.32166 18.7305C2.48854 18.2696 1.46659 18.8722 1.46659 19.8243L1.46659 32.8429C1.46659 33.795 2.48854 34.3976 3.32166 33.9367L15.0885 27.4274C15.9484 26.9517 15.9484 25.7155 15.0885 25.2398L3.32166 18.7305ZM19.3333 20.5834C19.3333 19.893 19.893 19.3334 20.5833 19.3334H32.0833C32.7737 19.3334 33.3333 19.893 33.3333 20.5834V32.0834C33.3333 32.7737 32.7737 33.3334 32.0833 33.3334H20.5833C19.893 33.3334 19.3333 32.7737 19.3333 32.0834V20.5834ZM21.3333 21.3334V31.3334H31.3333V21.3334H21.3333ZM32.7071 2.70684C33.0976 2.31631 33.0976 1.68315 32.7071 1.29263C32.3166 0.902101 31.6834 0.902101 31.2929 1.29263L26.3333 6.25222L21.3738 1.29269C20.9832 0.90217 20.3501 0.90217 19.9596 1.29269C19.569 1.68322 19.569 2.31638 19.9596 2.70691L24.9191 7.66643L19.9596 12.626C19.569 13.0165 19.569 13.6496 19.9596 14.0402C20.3501 14.4307 20.9832 14.4307 21.3738 14.0402L26.3333 9.08065L31.2929 14.0402C31.6834 14.4308 32.3166 14.4308 32.7071 14.0402C33.0976 13.6497 33.0976 13.0166 32.7071 12.626L27.7475 7.66643L32.7071 2.70684Z" fill="#C5C7CA"/>
                </svg>
            </div>
            {signup ? (
                <Signup 
                    setSignup={setSignup} 
                    setShowModal={setShowModal} 
                    setAnimate={setAnimate} 
                    animate={animate} 
                    zindex="" 
                />
            ) : (
                <Login 
                    setSignup={setSignup} 
                    setShowModal={setShowModal} 
                    setAnimate={setAnimate} 
                    animate={animate} 
                    zindex="" 
                />
            )}
        </div>
    )
}

export default Authentication;