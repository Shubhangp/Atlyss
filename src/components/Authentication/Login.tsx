import React, { useEffect, useState } from 'react';
import { getAllItems } from '../../utils/indexedDB';

interface LoginProps {
  zindex?: string;
  setSignup: (signup: boolean) => void;
  setShowModal?: (show: boolean) => void;
  setAnimate?: (animate: boolean) => void;
  animate?: boolean;
}

const Login: React.FC<LoginProps> = (props) => {
  const { zindex, setSignup, setShowModal, setAnimate, animate } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(email !== "" && password !== ""){
      setLoading(true);

      const users = await getAllItems();

      const user = users.find(
        (user: { email: string; username: string }) => user.email === email || user.username === email
      );

      if (!user) {
        alert("Please check your credentials.");
        setLoading(false);
        return;
      }

      if (user.password !== password) {
        alert("Enter the correct password.");
        setLoading(false);
        return;
      }

      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = "/posts";
    }else{
      alert("Please enter all details!");
    }
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  const handleAnimate = () => {
    if(setAnimate){
      setAnimate(true);
    }
  }

  const closeModal = () => {
    if(setAnimate){
      setAnimate(false);
    }
    setTimeout(() => {
      setShowModal && setShowModal(false);
      setSignup(true);
    }, 300);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div tabIndex={-1} className={`max-h-full ${zindex} w-full overflow-x-hidden overflow-y-auto md:inset-0 ${animate ? 'animate-in' : 'animate-out'}`}>
        <div className="relative w-full max-w-lg max-h-full mx-auto flex justify-center">
          <div className={`gradient-border w-[463px] ${zindex ? "fixed top-20" : "relative"} bg-[#27292D] shadow px-6 py-10 flex flex-col justify-center items-center gap-[45px]`}>
            <div className='flex flex-col justify-center items-center gap-2'>
              <span className='font-inter font-medium text-sm text-[#6B6C70]'>WELCOME BACK</span>
              <span className='font-inter font-semibold text-lg text-[#FFF]'>Log into your account</span>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='font-inter text-sm font-medium text-[#C5C7CA]'>Username or email address</label>
                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-md bg-transparent border border-[#35373B] text-[#A1A1A3] sm:text-sm block w-full p-2.5 focus:outline-none' placeholder='Enter your email address' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='font-inter text-sm font-medium text-[#C5C7CA]'>Password</label>
                <div className="relative w-full">
                  <input type={isPasswordVisible ? "text" : "password"} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-md bg-transparent border border-[#35373B] text-[#A1A1A3] sm:text-sm block w-full p-2.5 focus:outline-none' placeholder='Enter your password' />
                  <div className='absolute right-3 bottom-3' onClick={togglePasswordVisibility}>
                    {!isPasswordVisible ? (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.41667 10C2.41667 9.19329 2.93513 7.70472 4.18608 6.40565C5.40721 5.13755 7.29888 4.08334 10 4.08334C12.7011 4.08334 14.5928 5.13755 15.8139 6.40565C17.0649 7.70472 17.5833 9.19329 17.5833 10C17.5833 10.8067 17.0649 12.2953 15.8139 13.5944C14.5928 14.8624 12.7011 15.9167 10 15.9167C7.29888 15.9167 5.40721 14.8624 4.18608 13.5944C2.93513 12.2953 2.41667 10.8067 2.41667 10ZM10 2.58334C6.8678 2.58334 4.5928 3.82078 3.1056 5.36519C1.64822 6.87862 0.916672 8.72338 0.916672 10C0.916672 11.2766 1.64822 13.1214 3.1056 14.6348C4.5928 16.1792 6.8678 17.4167 10 17.4167C13.1322 17.4167 15.4072 16.1792 16.8944 14.6348C18.3518 13.1214 19.0833 11.2766 19.0833 10C19.0833 8.72338 18.3518 6.87862 16.8944 5.36519C15.4072 3.82078 13.1322 2.58334 10 2.58334ZM8.24993 10C8.24993 9.0335 9.03343 8.25 9.99993 8.25C10.9664 8.25 11.7499 9.0335 11.7499 10C11.7499 10.9665 10.9664 11.75 9.99993 11.75C9.03343 11.75 8.24993 10.9665 8.24993 10ZM9.99993 6.75C8.205 6.75 6.74993 8.20508 6.74993 10C6.74993 11.7949 8.205 13.25 9.99993 13.25C11.7949 13.25 13.2499 11.7949 13.2499 10C13.2499 8.20508 11.7949 6.75 9.99993 6.75Z" fill="#7F8084"/>
                    </svg>)
                    : (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#7F8084" d="M17.883 19.297A10.95 10.95 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A11 11 0 0 1 4.52 5.935L1.394 2.808l1.414-1.414l19.799 19.798l-1.414 1.415zM5.936 7.35A8.97 8.97 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604zm6.978 6.978l-3.242-3.241a2.5 2.5 0 0 0 3.241 3.241m7.893 2.265l-1.431-1.431A8.9 8.9 0 0 0 20.778 12A9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.95 10.95 0 0 1-2.012 4.593m-9.084-9.084Q11.86 7.5 12 7.5a4.5 4.5 0 0 1 4.492 4.778z"/>
                    </svg>)}
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center items-start gap-3 w-full'>
                <button type="submit" disabled={loading} className='w-full bg-[#4A96FF] active:bg-[#9fc2fa] disabled:[#9fc2fa] rounded-[4px] py-2 text-[#FFF] text-base leading-[19.36px] font-inter font-medium'>
                  Login now
                </button>
                <div className='text-[#7F8084] text-sm leading-[16.94px] font-inter font-medium'>Not registered yet?<span className='text-[#C5C7CA] cursor-pointer' onClick={() => setSignup(true)}> Register →</span></div>
              </div>
            </form>
          </div>
          {zindex && <div className='absolute top-24 right-10 z-[499]' onClick={closeModal}>
            <div className='bg-[#131319] w-8 h-8 rounded-full flex justify-center items-center'>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.57536 1.30861C9.81943 1.06454 9.81943 0.668808 9.57536 0.42473C9.33128 0.180652 8.93555 0.180652 8.69147 0.42473L5.00008 4.11612L1.30869 0.42473C1.06461 0.180652 0.668884 0.180652 0.424806 0.42473C0.180729 0.668808 0.180729 1.06454 0.424806 1.30861L4.1162 5L0.424806 8.6914C0.180729 8.93547 0.180729 9.3312 0.424806 9.57528C0.668884 9.81936 1.06461 9.81936 1.30869 9.57528L5.00008 5.88389L8.69147 9.57528C8.93555 9.81936 9.33128 9.81936 9.57536 9.57528C9.81943 9.3312 9.81943 8.93547 9.57536 8.6914L5.88396 5L9.57536 1.30861Z" fill="white"/>
              </svg>
            </div>
          </div>}
        </div>
      </div>
      {zindex && <div className={`w-full h-full bg-[#000]/[0.5] fixed top-0 left-0 z-[49] ${animate ? 'animate-in' : 'animate-out'}`}></div>}
    </>
  )
}

export default Login;