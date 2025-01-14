import Home from './components/Home.jsx'
import { About, Contact, Footer, Projects, Services, Header, Navbar} from './components/index.js'
import { Routes, Route } from 'react-router-dom'

const  App = () => {
  return (
    <div className='w-full relative bg-black overflow-x-hidden'>
      <Navbar/>
      <div className='w-[1080px] mx-auto'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/projects" element={<Projects/>}/>         
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Header/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App