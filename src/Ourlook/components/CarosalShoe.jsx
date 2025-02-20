import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'flowbite-react';

export default function Carosalshoe(props) {
  const { image, title, description, money, subtitle, image1 } = props;
  

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Card 
      horizontal 
      className='m-5' 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-gray-900 dark:text-white">{title}</h5>
      <div className='grid grid-cols-2 gap-3'>
    <i className="fa-regular fa-eye "></i> 
      <i className="fa-solid fa-heart"></i>
        </div> 
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <img 
            src={isHovered ? image1 : image} 
            alt={title} 
            className="rounded-xl w-fit"
          />
        </div>

        <div className="flex-1">
          <p className="md:text-lg text-gray-700 dark:text-gray-400 mb-4">
            {description}
          </p>

          <div className="flex space-x-1 mb-4">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-regular fa-star text-gray-400"></i>
          </div>

          <h3 className="text-xs mb-2 md:block hidden">{subtitle}</h3>

         <div className='grid grid-cols-2'>
         <p className="text-lg font-bold text-gray-900 mb-4">{money}</p>
        {isHovered? <button href="" className="border-2 border-blue-500 bg-blue-500 text-white  rounded-full text-sm ">
            QUICKSHOP
          </button> :""

        } 
          </div> 
          <button
      className="border-2 border-blue-500 bg-blue-500 text-white p-2 rounded-full text-sm lg:hidden"
      
    >
      QUICKSHOP
    </button>
        </div>
      </div>
    </Card>
  );
}
