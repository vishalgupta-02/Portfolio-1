import React from 'react'
import luffy from '../assets/luffy.jpeg'

const Projects = () => {
  return (
    <div className='w-full h-[90vh] text-white my-8 py-4 px-4 mx-auto'>
      <div className='w-full h-screen flex justify-center items-center flex-col'>
        <h1 className='text-4xl text-start my-6'>Projects</h1>
        <div className='grid grid-cols-3 gap-4 w-[1080px]'>
          <div className='border border-white p-4 rounded-lg flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <h2>Project 1</h2>
              <div className='flex flex-col items-start justify-center p-4 rounded-lg'>
                <p>Project 1 description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid.</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center p-4 rounded-lg'>
              <img src={luffy} className='rounded-lg my-4' alt="" />
              <button className='w-full text-xl px-2 py-2 mx-4 bg-white text-black rounded-lg outline-none'>Live Mode</button>
            </div>
          </div>
          <div className='border border-white p-4 rounded-lg flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <h2>Project 1</h2>
              <div className='flex flex-col items-start justify-center p-4 rounded-lg'>
                <p>Project 1 description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid.</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center p-4 rounded-lg'>
              <img src={luffy} className='rounded-lg my-4' alt="" />
              <button className='w-full text-xl px-2 py-2 mx-4 bg-white text-black rounded-lg outline-none'>Live Mode</button>
            </div>
          </div>
          <div className='border border-white p-4 rounded-lg flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <h2>Project 1</h2>
              <div className='flex flex-col items-start justify-center p-4 rounded-lg'>
                <p>Project 1 description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid.</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center p-4 rounded-lg'>
              <img src={luffy} className='rounded-lg my-4' alt="" />
              <button className='w-full text-xl px-2 py-2 mx-4 bg-white text-black rounded-lg outline-none'>Live Mode</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects