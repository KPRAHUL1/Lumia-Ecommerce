import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '../../assets/banner/slide1.webp';
import slide2 from '../../assets/banner/slide2.webp';

const slides = [
  {
    id: 1,
    title: `Fashion That has  Sense`,
    subtitle: 'Make your best moments more stylish with our latest designs of clothing. Unique designs for the unique quench of style',
    button:'START FREE TRIAL STORE',
    image: slide1,
  },
  {
    id: 2,
    title: 'Transform Your Ideas into Reality',
    subtitle: `Make your best moments more stylish with our latest designs of clothing. Unique designs for the unique quench of style`,
    button:'SHOP NOW',
    image: slide2,
  },
];

const MotionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[200px] lg:h-[600px] md:h-[400px] xl:h-[730px] overflow-hidden ">
      <AnimatePresence>
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full "
        >
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
            className="w-full h-full object-cover"
          />

          <motion.div 
            className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration:5 }}
          >
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration:1 }}
              className="text-lg md:text-4xl  font-normal mb-4 text-black"
            >
            <div className='flex flex-col items-center justify-center gap-5'> 
                <motion.h6   initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration:1.1 }}
                 className='text-sm font-thin'>New Arival</motion.h6>
                <p>Fashion That has <br /> Sense</p> 
                </div>
            </motion.h1>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay:3 ,duration:1.2  }}
              className=" md:text-sm text-black hidden lg:block"
            >
              Make your best moments more stylish with our latest designs of clothing.&nbsp;<br /> Unique designs for the unique quench of style
            </motion.p>
            <motion.a href='/'
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 2, duration:1.5 }}
  onClick={handleNext}
  className='mt-5 px-5 py-3  rounded-full text-xs font-medium cursor-pointer bg-white hover:bg-black hover:text-white text-black'
>
  {slides[currentSlide].button}
</motion.a>

          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute hidden bottom-5 -translate-x-1/2 left-1/2 space-x-20  lg:flex  px-4">
        <button
          onClick={handlePrev}
          className=" bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className=" bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Indicators */}
      <div className="hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 lg:flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MotionBanner;