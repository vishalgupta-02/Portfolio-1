import Luffy from '../assets/Luffy.jpeg'

const Hero = () => {
  return (
    <div className='flex items-center justify-evenly h-[90vh] relative mx-auto max-w-[1080px]'>
      <div className='flex flex-col gap-4 z-10 px-3'>
        {/* left section */}
        <h1 className='text-white text-8xl md:text-10xl font-bold leading-tight mb-6'>Vishal <br /> <span className="text-primary">Gupta</span></h1>
        {/* <hr className='bg-white w-full h-[2px]'/> */}
        <p className='text-sm text-gray-400'>Hello, my name is Vishal Gupta, nice to meet you. I would like to welcome you with my personal portfolio</p>
        <hr className='bg-white w-full h-[2px] mb-6'/>
        <div className='flex gap-4'>
          <a href='#' className='bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:text-white hover:bg-black'>Hire Me</a>
        </div>
      </div>
      <div className='z-200 text-center'>
        {/* right section */}
        <img src={Luffy} alt="Main-Profile" className='w-[650px] rounded-full'/>
      </div>
      {/* <div>
        <img src={} alt="" />
      </div> */}
    </div>
  )
}

export default Hero