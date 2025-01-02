import { ribbonData } from '../assets'

const Ribbon = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='bg-primary w-full h-[50px] overflow-hidden'>
        <p className='text-center py-2'>
          {
            ribbonData.map((data, index) => (
              <span key={data.id} className='text-black text-5xl ml-8 font-bold text-center teko-medium'>{data.title} {index < ribbonData.length - 1 && <span className='text-black text-center mx-auto'>.</span>}</span>
            ))
          }
        </p>
      </div>
    </div>
  )
}

export default Ribbon