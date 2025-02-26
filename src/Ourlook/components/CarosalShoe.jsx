import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Carosalshoe({ id, images = [], title, description, money, subtitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const primaryImage = images[0] ? `http://localhost:5000/${images[0]}` : "http://localhost:5000/fallback-image.jpg";
  const secondaryImage = images[1] ? `http://localhost:5000/${images[1]}` : primaryImage;

  const handleProductClick = () => {
    navigate(`/shopping/${id}`); // Navigate to product details page
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
       // Navigate on click
    >
      <Card className="shadow rounded-2xl flex flex-col bg-white justify-center items-center md:p-4 relative">
        {/* Brand Name */}
        <p className="text-sm font-bold text-gray-600 self-start">ASIKS</p>

        {/* Main Content */}
        <div className="flex flex-row justify-center gap-3 w-full">
          {/* Left Side - Image */}
          <div className="w-1/3 flex justify-center relative">
            <motion.img
              src={isHovered ? secondaryImage : primaryImage}
              alt={title}
              onClick={handleProductClick}
              className="rounded-xl md:w-full object-cover transition-transform duration-500"
              animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0.8 : 1 }}
            />
          </div>

          {/* Right Side - Details */}
          <div className="w-2/3">
            <h5 className="font-semibold text-gray-600 md:text-lg">{title}</h5>

            {/* Review Stars */}
            <div className="flex items-center text-yellow-400 mt-1">
              ⭐⭐⭐⭐☆ <span className="text-sm text-gray-500 ml-1">(2 reviews)</span>
            </div>

            {/* Description */}
            <p className="text-sm hidden md:block text-gray-600 mt-2">{description}</p>

            {/* Subtitle */}
            <h3 className="text-xs hidden md:block text-gray-500 mt-1">{subtitle}</h3>

            {/* Price and Button */}
            <div className="flex justify-between items-center mt-3">
              <p className="text-xl font-bold text-gray-900">{money}</p>

              {/* Quick Shop Button (Visible on Hover) */}
              {isHovered || window.innerWidth < 768 ? (
                <>
                <motion.div
                  className="absolute bottom-0 right-0 bg-white p-3 rounded-b-2xl flex flex-col justify-center items-center"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.button
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-all"
                    whileTap={{ scale: 0.9 }}
                  >
                    QUICK SHOP
                  </motion.button>
                </motion.div> <div className="absolute top-3 right-3 flex space-x-3 text-gray-500">
          <FaEye className="text-lg cursor-pointer hover:text-gray-800" />
          <FaHeart className="text-lg cursor-pointer hover:text-red-500" />
        </div></>
              ) : null}
            </div>
          </div>
        </div>

        {/* Icons (Eye & Heart) */}
       
      </Card>
    </motion.div>
  );
}
