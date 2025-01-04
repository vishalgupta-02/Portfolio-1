import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center' style={{backgroundImage: "url('/majestic_mountain.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <Navbar/>
        {/* <Hero/> */}
        <div className='flex justify-between w-[1080px] h-[90vh] relative mx-auto'>
            <div className='flex flex-col justify-center gap-4 px-3 w-full'>
                {/* left section */}
                <h1 className='text-white text-[75px] md:text-10xl font-bold leading-tight mb-6'>Vishal Gupta</h1>
                {/* <hr className='bg-white w-full h-[2px]'/> */}
                <p className='text-sm text-gray-200'>Hello, my name is Vishal Gupta, nice to meet you. I would like to welcome you with my personal portfolio</p>
                <hr className='bg-white w-full h-[2px] mb-6'/>
                <div className='flex gap-4'>
                    <a href='#' className='bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:text-white hover:bg-black'>Hire Me</a>
                </div>
            </div>
            <div className='w-full'/>
        </div>
    </div>
  )
}

export default Header