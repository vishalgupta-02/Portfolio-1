import {Navbar, About, Contact, Footer, Hero, Projects, Ribbon, Services} from './components/index.js'

const  App = () => {
  return (
    <div className='w-full relative bg-black overflow-x-hidden'>
      <Navbar/>
      <div>
        <Hero/>
        <About/>
        <Ribbon/>
        <Services/>
        <Projects/>
        <Ribbon/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App