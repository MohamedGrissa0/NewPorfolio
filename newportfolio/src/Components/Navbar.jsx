import React , {useState} from 'react'


function Navbar() {
    const [is,set] = useState(false)
  return (
    <div className=' 	p-5'>
     <div className="text-white flex flex-row bg-black justify-between"> <div>
            <h1 className='text-xl'>M.Grissa</h1>
        </div>
        <div>
        <i onClick={() => set(!is)} className="fa-solid fa-bars text-xl"></i>
        </div></div>
       
         {is&& <div className='h-screen mt-[-40px] w-screen text-white z-999  bg-black flex flex-col justify-center items-center  '>
          <a href="/">
            <h1 className='text-8xl m-6'>Home</h1>
          </a>
          <a href="/portfolio">
            <h1 className='text-8xl m-6'>Portfolio</h1>
          </a><a href="/contact">
            <h1 className='text-8xl m-6'>Contact Me</h1>
          </a>
        </div>
         }
    </div>
  )
}

export default Navbar