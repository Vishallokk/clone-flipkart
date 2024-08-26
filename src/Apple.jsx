import React from 'react'

 const Apple = (props) => { 
  return (
    <div>
        <div className='flex justify-center items-center mt-1 flex-col border border-spacing-6 sm:mt-20 
         h-[300px] w-[200px]sm:h-[400px] sm:w-full'>
          <h1 className='font-bold text-xl bg-white'>{props.tittle}</h1>
             
            <img src={props.link} className='h-[150px] w-[200px] mt-1 sm:h-[300px] sm:w-[1500px] sm:contain' ></img>
            
            <div className='bg-white font-bold w-full flex justify-center item-center '>{props.para}</div>
           
        </div>

    </div>
  )
}

export default Apple


