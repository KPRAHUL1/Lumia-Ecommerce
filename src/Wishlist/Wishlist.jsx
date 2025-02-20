
"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import heart from "../assets/icons/heart.png"
export default function Wishlist() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
        <button onClick={() => setIsOpen(true)} className="border-0 border-none  bg-transparent"><img src={heart} alt="" className="w-5"/></button>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="rounded-l-xl w-5/12">
        <Drawer.Header titleIcon={() => <></>} title=""/>
        <Drawer.Items>
         
         
        </Drawer.Items>
      </Drawer>
    </>
  );
}
