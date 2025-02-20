import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./Sign/components/Dialog";
import StyledInput from "./Footer-section/components/StyledInput";
import user from './assets/icons/people.png'
const Modal = () => (
  <Dialog>
    <DialogTrigger>
    
        <img src={user} alt="User Icon" className="w-5 " />
     
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <div className="grid grid-cols-2 ">
          <div className="w-full hidden lg:block">
            <img
              src="/popup-login-fashion2.webp"
              alt="Fashion Login"
              className="w-full h-full rounded-l-xl "
            />
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="space-y-3 text-center">
              <h1 className="text-xl font-bold mt-5">Sign In to Our Store</h1>
              <p className="text-xs">
                Login to our store and start shopping for your products
              </p>
            </div>
            <div className="space-y-4 xl:px-10 mt-10">
    <div className="relative flex flex-col">
      <label htmlFor="email" className="font-semibold">Email</label>
      <div className="flex items-center " >
        <StyledInput
          id="email"
          type="email"
          className=" flex-1 p-1 border-b-2"
          placeholder="Enter your email here"
        />
        <i className="fa-regular fa-eye cursor-pointer ml-2"></i>
      </div>
    </div>
    <div className="relative flex flex-col">
      <label htmlFor="password" className="font-semibold">Password</label>
      <div className="flex items-center  ">
        <StyledInput
          id="password"
          type="password"
          className="border-b-2 flex-1 p-1"
          placeholder="* * * * *"
        />
        <i className="fa-regular fa-eye cursor-pointer ml-2"></i>
      </div>
    </div>
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
    >
      SIGN IN
    </button>
    <div className="text-center mt-4">
      <a href="#" className="text-blue-500">Forgot Password?</a>
      <p className="mt-2 text-sm">
        Don't have an account?{" "}
        <a href="#" className="text-blue-500">Register Here</a>
      </p>
    </div>
  </div>
          </div>
        </div>
      </DialogHeader>
      <DialogFooter>
        <DialogClose
          className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Modal;
