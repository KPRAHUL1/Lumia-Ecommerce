
import Shoecarosal from "./components/shoecarosal";
import Shoeheader from "./components/shoeheader";
   
export default function Shoessection(){
  
    return(
        <>
        <section className="mt-5">
        <Shoeheader />
        <Shoecarosal/>
             </section>
  
        </>
    )
}