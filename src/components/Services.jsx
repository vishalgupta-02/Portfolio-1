
const data= [
  {
    id: 1,
    title: "UI/UX DESIGN",
  },
  {
    id: 2,
    title: "MOCKUP DESIGN",
  },
  {
    id: 3,
    title: "DESIGN GRAPHIC",
  },
  {
    id: 4,
    title: "ICON DESIGN",
  },
  {
    id: 5,
    title: "LOGO DESIGN",
  },
]

const data2= [
  {
    id: 1,
    title: "IOS DEVELOPMENT",
  },
  {
    id: 2,
    title: "WEBSITE DEVELOPMENT",
  },
  {
    id: 3,
    title: "ANDROID DEVELOPMENT",
  },
  {
    id: 4,
    title: "BACKEND DEVELOPMENT",
  },
  {
    id: 5,
    title: "WEBFLOW DEVELOPMENT",
  }
]

const Tools = () => {
  return (
    <div className="w-[1080px] mx-auto my-10">
      <div className="flex flex-col justify-between items-center w-full rounded-lg bg-[#1A1A1A] p-4 text-white">
        <p className="text-primary text-xl teko-medium">Services</p>
        <h1 className="text-white text-7xl teko-medium w-2/3 text-center">Available Services that I can work on</h1>
        <div className="flex flex-col justify-start items-center w-full">
          {/* Design Visual */}
          <div>
            <p className="text-3xl mb-7"><span className="text-primary">01.</span> DESIGN VISUAL</p>
            <div className="border outline-white w-full flex justify-start items-center">
              {
                data.map((item, index)=>(
                  <p className="px-12 py-6" key={index}>{item.title}</p>
                ))
              }
            </div>
          </div>
          {/* Development */}
          <div>
            <p className="text-3xl mb-7 mt-7"><span className="text-primary">02.</span> DEVELOPMENT</p>
            <div className="border outline-white w-full flex justify-start items-center">
              {
                data2.map((item, index)=>(
                  <p key={index} className="px-12 py-6">{item.title}</p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools