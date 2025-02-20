import axios from "axios";
import { useEffect, useState } from "react";


export default function Collection_images() {
  const [value,setValue]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/api/socialmedia')
    .then(res=>setValue(res.data))
    .catch(err => console.error("Error fetching data:", err))
  },[])
  const Images = ["a.avif","b.avif", "c.webp", "d.avif","e.webp","f.avif","g.avif","h.avif","i.avif","j.avif","k.avif","l.avif","m.avif","n.avif","o.avif","p.avif"];

  return (
    <>
      <div className="pt-10">
        <div className=" flex justify-center xl:sticky xl:z-10 sticky static rounded-full">
          <a href="" className="bg-blue-600 rounded-full m-5 p-3 xl:absolute xl:top-32 md:top-8  lg:top-12 absolute top-12  transition duration-300 ease-in-out hover:scale-110 ">
            <i className="fa-brands fa-instagram text-5xl text-white m-5 transition duration-300 ease-in-out hover:scale-110"></i></a>
        </div>
        <div className="md:grid md:grid-cols-6 md:p-5 md:justify-items-center grid grid-cols-3 justify-items-center xl:hidden ">
          <div className="col-span-1 p-4"> <img src="a.avif" alt="" className="rounded-xl " /></div>
          <div className="col-span-1 p-4" > <img src="b.avif" alt="" className="rounded-xl  " /></div>
          <div className="col-span-1 p-4"><img src="c.webp" alt="" className="rounded-xl  " /></div>
          <div className="col-span-1 p-4"> <img src="d.avif" alt="" className="rounded-xl  " /></div>
          <div className="col-span-1 p-4"><img src="e.webp" alt="" className="rounded-xl  " /></div>
          <div className="col-span-1 p-4"> <img src="f.avif" alt="" className="rounded-xl  " /></div>
        </div>
        
          <div className="hiddens xl:grid xl:grid-cols-8 m-5 gap-5">
            {value.map((image, index) => (
              <div key={index} className="overflow-hidden w-auto h-auto rounded-xl">
                <a href="#">
                  <img src={`http://localhost:5000/${image.imagePath}`} alt={`Image ${index}`} className="rounded-xl transition duration-300 ease-in-out hover:scale-110" />
                </a>
              </div>
            ))}
          </div>
        
      </div>


    </>
  )
}