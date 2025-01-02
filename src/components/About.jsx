
const About = () => {
  return (
    <div className="h-[90vh] grid grid-cols-2 text-white rounded relative w-[1080px] mx-auto my-10">
      <div className="flex flex-col gap-2 justify-start items-start mt-20">
        <p className="text-primary">About Me</p>
        <h1 className="text-5xl flex-wrap leading-tight teko-medium">I can deliver results that exceed your expectation.</h1>
        <div className="flex mt-6 gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:text-white hover:bg-black">Hire Me Now </button>
          {/*  Arrow icon */}
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-[544px] absolute right-0 bottom-14 bg-opacity-50 rounded">
        <p className="text-md text-gray-300 text-wrap prata-regular">Hi, I&apos;m Vishal Gupta I have an Understanding of the relationship between design and users through detailed execution and proper user experience. I love working on interesting and meaningful projects that I can be proud of, and I always strive to create clean, pixelated interfaces that are smoothly animated. I prefer to prioritize not only code but also quality, perfect graphic design and optimized development.</p>
        <div className="flex gap-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">312<span className="text-primary text-2xl text-center">+</span>  </h1>
            <p className="text-gray-500">Project Complete</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">281<span className="text-primary text-2xl text-center">+</span></h1>
            <p className="text-gray-500">World Clients</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">10<span className="text-primary text-2xl text-clip">+</span></h1>
            <p className="text-gray-500">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About