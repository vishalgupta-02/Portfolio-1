import { About, Contact, Footer, Projects, Ribbon, Services, Header} from './components/index.js'

const  App = () => {
  return (
    <div className='w-full relative bg-black overflow-x-hidden'>
      <div>
        <Header/>
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