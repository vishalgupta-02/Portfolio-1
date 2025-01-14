import React from 'react'

const Home = () => {
  return (
    <div className='text-white flex justify-center items-center flex-col w-[1080px] h-[80vh]'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-[70px] prata-regular'>Hi, I&apos;m Vishal Gupta</h1>
          <p>An aspiring Full Stack Developer passionate about building dynamic and user-friendly web applications.</p>
          <button className="text-sm font-semibold lg:text-base border-[1px] border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black my-6 duration-300">Hire Me</button>
        </div>
        <div>
            {/* Other Good-looking elements */}
        </div>
    </div>
  )
}

export default Home