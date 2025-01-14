import { NavLinks } from "../assets"
import luffy from '../assets/luffy.jpeg'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center border border-gray-400 px-4 py-2 justify-between bg-white text-black relative w-[1080px] mx-auto my-4 rounded-lg">
        <div className="flex items-center gap-2">
          {/* Logo Section */}
          <img src={luffy} alt="Luffy-Image as logo" className="w-9 rounded-full cursor-pointer"/>
          {/* <span>ViShAL</span> */}
        </div>
        <div className="flex items-center gap-4">
          {/* Navbar Links */}
          {
            NavLinks.map((link, index)=>{
              return (
                <div key={index}>
                  <a key={index} href={link.link} className="text-sm font-semibold lg:text-base hover:text-white duration-500">
                    {link.title}
                  </a>
                  <hr className="w-full h-[3px] hidden bg-black"/>
                </div>
              )
            })
          }
        </div>
        <div>
          {/* Contact Button */}
          <button className="text-sm font-semibold lg:text-base border-[1px] border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white duration-300">Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar