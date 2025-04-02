import React from 'react'
import lost from '../images/lost.svg'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 mt-20 mx-auto">
      <img src={lost} alt="404 image" class="w-full" />
      <p class="text-center">You appear to be lost! We can however help you find a way back home.</p>
      <Link to="/" class=" border-none bg-black text-white w-2/3 rounded-full h-10 text-center py-2">Back Home</Link>
      {/* <button class="mb-2 border-none bg-black text-white px-4 w-1/2 rounded-full h-10">Back Home</button> */}

    </div>
    
  )
}
