import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from './utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();
  const handleClick= ()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2'>
        <div className='flex col-span-1 '>
        <img 
        onClick={handleClick}
        className='h-[56px] cursor-pointer'
        alt='hamburgerimage' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC'/>
        
        <img
        className='h-[56px] mx-2 '
         alt='logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'/>
        </div>

        <div className='col-span-10 px-10'>
          <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1'>
        <img 
        className='h-[26px]'
        src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='userlogo'/>
        </div>

        </div>
  )
}

export default Header