import React, { useEffect, useState, FormEvent } from 'react';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';

interface User {
  username: string;
}

interface PostsProps {}

const Posts: React.FC<PostsProps> = () => {
  const [post, setPost] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [signup, setSignup] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  const handlePageClick = () => {
    if (!loginStatus) {
      setShowModal(true);
    }
  };

  const handlePost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post !== '') {
      alert(post);
    } else {
      alert('Please write some content before post!');
    }
  };

  const handleLoggedOut = () => {
    localStorage.removeItem('loggedInUser');
    setLoginStatus(false);
    setShowModal(true);
  };

  return (
    <>
      <div className='w-full bg-[#131319] py-[69px] flex justify-center'>
        <div className={`md:w-[700px] lg:w-[700px] w-[90%] flex flex-col justify-center items-start gap-10`}>
          <div className='flex flex-col gap-3'>
            <h1 className='font-inter font-medium text-[28px] text-[#C5C7CA] leading-[33.89px] cursor-pointer' onClick={handleLoggedOut}>
              Hello {loginStatus ? user?.username : 'Jane'}
            </h1>
            <p className='max-w-[580px] font-inter font-normal text-base text-[#7F8084] leading-6'>
              How are you doing today? Would you like to share something with the community 🤗
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-4 w-full' onClick={handlePageClick}>
            {/* Create Post */}
            <form onSubmit={handlePost} className='w-full border-[2px] border-[#35373B] bg-[#27292D] py-6 px-5 rounded-lg flex flex-col gap-4'>
              <h1 className='font-inter font-medium text-[#C5C7CA] text-lg leading-[21.78px]'>Create post</h1>
              <div className='bg-[#191920] py-[15px] px-4 rounded-lg flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-[#27292D] flex justify-center items-center'>💬</div>
                <input
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  placeholder='How are you feeling today?'
                  className='max-w-[551px] w-full bg-transparent focus:outline-none font-inter font-normal text-[#7F8084] text-base leading-4 placeholder:text-[#7F8084] placeholder:text-base placeholder:leading-4 placeholder:font-inter placeholder:font-normal'
                />
              </div>
              <div className={`w-full flex justify-end ${animate ? 'margin-animate-in' : 'margin-animate-out'}`}>
                <button className={`${animate ? 'post-animate-in' : 'post-animate-out'} bg-[#4A96FF] py-3 px-[38px] rounded font-inter font-medium text-[#FFF] text-base leading-[19.36px]`}>Post</button>
              </div>
            </form>

            {/* Posts */}

            <div className='w-full border-[2px] border-[#35373B] bg-[#27292D] py-6 px-5 rounded-lg flex flex-col gap-5'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                  <div>
                    <img
                      className='w-11 h-11 rounded-full'
                      alt=''
                      src='https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoE-raK0~jpV1hiebtklrbwwiwYAYERs-GibIr4INGRpUYw3OKbAIt1Em53BZO1wJelCpUP3BShIQt~pUWP50FJtIrUMBJMYpTTnarlg7h~Oxndlnpg7wWTWy8isQM92ZVHgY1kEpO3JY3Og7eIQH0eWX~nAHhaV7nzVu9T2ocGJPujd-VWQ6CqCpC5LSkaPXFkFJ4Ke1cup5Ni84st~z7-lCrate8O287~srliQT7ZyGLTBra0rF2Ejo6Aak2UtM2MfqQX36793R1MmwqiiVaqu6ivhCUXDVidLBnkIHprHFGS9xfhqlFPzUAvn2zKUODeB1fHgRwbM4FYqX5BRfQ__' 
                    />
                  </div>
                  <div>
                    <h1 className='font-inter font-medium text-[#C5C7CA] text-base leading-[19.36px]'>Theresa Webb</h1>
                    <span className='font-inter font-medium text-[#C5C7CA] text-sm leading-[16.94px]'>5mins ago</span>
                  </div>
                </div>
                <div>
                  <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.83337 2C3.83337 2.82843 3.1618 3.5 2.33337 3.5C1.50495 3.5 0.833374 2.82843 0.833374 2C0.833374 1.17157 1.50495 0.5 2.33337 0.5C3.1618 0.5 3.83337 1.17157 3.83337 2ZM10.5 2C10.5 2.82843 9.82847 3.5 9.00004 3.5C8.17161 3.5 7.50004 2.82843 7.50004 2C7.50004 1.17157 8.17161 0.5 9.00004 0.5C9.82847 0.5 10.5 1.17157 10.5 2ZM15.6667 3.5C16.4951 3.5 17.1667 2.82843 17.1667 2C17.1667 1.17157 16.4951 0.5 15.6667 0.5C14.8383 0.5 14.1667 1.17157 14.1667 2C14.1667 2.82843 14.8383 3.5 15.6667 3.5Z" fill="#C5C7CA"/>
                  </svg>
                </div>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <div className='bg-[#191920] py-[15px] px-4 rounded-lg flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-[#27292D] flex justify-center items-center'>👋</div>
                  <div className='max-w-[551px] w-full'>
                    <p className='font-inter font-normal text-[#7F8084] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.3333 1.83333L2.66662 1.83336C1.8382 1.83336 1.16663 2.50493 1.16663 3.33336V11.3334C1.16663 12.1618 1.8382 12.8334 2.66662 12.8334H10C10.1326 12.8334 10.2598 12.886 10.3536 12.9798L13.5 16.1262V13.3334C13.5 13.0572 13.7238 12.8334 14 12.8334H17.3333C18.1617 12.8334 18.8333 12.1618 18.8333 11.3334V3.33333C18.8333 2.5049 18.1617 1.83333 17.3333 1.83333ZM2.66662 0.83336L17.3333 0.833328C18.714 0.833325 19.8333 1.95262 19.8333 3.33333V11.3334C19.8333 12.7141 18.714 13.8334 17.3333 13.8334H14.5V17.3333C14.5 17.5356 14.3781 17.7179 14.1913 17.7953C14.0045 17.8727 13.7894 17.8299 13.6464 17.6869L9.79289 13.8334H2.66662C1.28591 13.8334 0.166626 12.7141 0.166626 11.3334V3.33336C0.166626 1.95265 1.28591 0.833363 2.66662 0.83336Z" fill="#C5C7CA"/>
                    </svg>
                  </div>
                  <div>
                    <span className='font-inter font-medium text-[#7F8084] text-sm leading-[16.94px]'>24 comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full border-[2px] border-[#35373B] bg-[#27292D] py-6 px-5 rounded-lg flex flex-col gap-5'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                  <div>
                    <img
                      className='w-11 h-11 rounded-full'
                      alt=''
                      src='https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjaO4xqO6OzQAES5oQgdW~RHgV~tNFklS42NwFL5VzYnY0PU4uQMfGcUBQAvfEPv7~bE8~3B7BwCV~iRjAiACBcX7~j71KwTqirlKUAwL23LCcp0kcfkPUYSrM4wykguQIACVrWCqqw58x~V1tVZGkTHN1XoDXenXiwzh-g8303noTAS32E~oBM9cY2wP5CHB7Y~BUriVU4FXjWaKojivlD7bg8prFSn~AuiliZJ9Pla-WJA2T8gMSi2RXiqKqTAm8aa9U3jpFcKsUcfwf9NFVUvLk9-wMf7MVDKCSIx8MMUBMQGqBXXnX~3iWkWeFdKpJHl8KsyeNwOke9Ydu~FdQ__' 
                    />
                  </div>
                  <div>
                    <h1 className='font-inter font-medium text-[#C5C7CA] text-base leading-[19.36px]'>Marvin McKinney</h1>
                    <span className='font-inter font-medium text-[#C5C7CA] text-sm leading-[16.94px]'>8mins ago • Edited</span>
                  </div>
                </div>
                <div>
                  <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.83337 2C3.83337 2.82843 3.1618 3.5 2.33337 3.5C1.50495 3.5 0.833374 2.82843 0.833374 2C0.833374 1.17157 1.50495 0.5 2.33337 0.5C3.1618 0.5 3.83337 1.17157 3.83337 2ZM10.5 2C10.5 2.82843 9.82847 3.5 9.00004 3.5C8.17161 3.5 7.50004 2.82843 7.50004 2C7.50004 1.17157 8.17161 0.5 9.00004 0.5C9.82847 0.5 10.5 1.17157 10.5 2ZM15.6667 3.5C16.4951 3.5 17.1667 2.82843 17.1667 2C17.1667 1.17157 16.4951 0.5 15.6667 0.5C14.8383 0.5 14.1667 1.17157 14.1667 2C14.1667 2.82843 14.8383 3.5 15.6667 3.5Z" fill="#C5C7CA"/>
                  </svg>
                </div>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <div className='bg-[#191920] py-[15px] px-4 rounded-lg flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-[#27292D] flex justify-center items-center'>👋</div>
                  <div className='max-w-[551px] w-full'>
                    <p className='font-inter font-normal text-[#7F8084] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.3333 1.83333L2.66662 1.83336C1.8382 1.83336 1.16663 2.50493 1.16663 3.33336V11.3334C1.16663 12.1618 1.8382 12.8334 2.66662 12.8334H10C10.1326 12.8334 10.2598 12.886 10.3536 12.9798L13.5 16.1262V13.3334C13.5 13.0572 13.7238 12.8334 14 12.8334H17.3333C18.1617 12.8334 18.8333 12.1618 18.8333 11.3334V3.33333C18.8333 2.5049 18.1617 1.83333 17.3333 1.83333ZM2.66662 0.83336L17.3333 0.833328C18.714 0.833325 19.8333 1.95262 19.8333 3.33333V11.3334C19.8333 12.7141 18.714 13.8334 17.3333 13.8334H14.5V17.3333C14.5 17.5356 14.3781 17.7179 14.1913 17.7953C14.0045 17.8727 13.7894 17.8299 13.6464 17.6869L9.79289 13.8334H2.66662C1.28591 13.8334 0.166626 12.7141 0.166626 11.3334V3.33336C0.166626 1.95265 1.28591 0.833363 2.66662 0.83336Z" fill="#C5C7CA"/>
                    </svg>
                  </div>
                  <div>
                    <span className='font-inter font-medium text-[#7F8084] text-sm leading-[16.94px]'>24 comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <>
          {signup ? (
            <Signup zindex="fixed top-0 left-0 right-0 z-50" setShowModal={setShowModal} setAnimate={setAnimate} animate={animate} setSignup={setSignup} />
          ) : (
            <Login zindex="fixed top-0 left-0 right-0 z-50" setShowModal={setShowModal} setAnimate={setAnimate} animate={animate} setSignup={setSignup} />
          )}
        </>
      )}
    </>
  );
};

export default Posts;