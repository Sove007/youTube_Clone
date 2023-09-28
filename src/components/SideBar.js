import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;

 

  return (
    <div className='p-5 shadow-md w-60 px-8' >
    <ul>
      <li className='font-bold'>Home</li>
      <li>Shorts</li>
      <li>Videos</li>
      <li>Like</li>
    </ul>
    <hr className='mt-4'/>
      <h1 className='font-bold mt-5'>Subsciption</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>gaming</li>
      </ul>
    <hr className='mt-4'/>
      <h1 className='font-bold mt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>gaming</li>
      </ul>

    </div>
  )
}

export default SideBar