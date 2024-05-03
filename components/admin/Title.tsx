import React from 'react'

interface TitleProps{
    title: string;
    
}

function Title({title}:TitleProps) {
  return (
    <section className='p-4'>
       <div className='text-xl text-black border-l-4 border-blue-300 px-4'>
        {title}
       </div>
    </section>
  )
}

export default Title