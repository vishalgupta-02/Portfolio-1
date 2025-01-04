import { NavLinks } from "../assets"
import luffy from '../assets/luffy.jpeg'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center border border-gray-400 px-4 py-2 justify-between bg-black text-white relative w-[1080px] mx-auto my-4 rounded-lg">
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
                <a key={index} href={link.link} className="text-sm font-semibold lg:text-base hover:text-black duration-300">
                  {link.title}
                </a>
              )
            })
          }
        </div>
        <div>
          {/* Contact Button */}
          <button className="text-sm font-semibold lg:text-base border-[1px] border-black px-4 py-2 rounded-lg hover:bg-white hover:text-black duration-300">Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar