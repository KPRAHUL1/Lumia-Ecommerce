export default function Icons(props){
const{image,title,description}=props
    return(
        <>
        <div className=" flex md:flex-row items-center gap-3 flex-col">
            <div className="bg-cover">
                <img src={image} alt="" className="w-10  "/>
            </div>
        
        <div className="flex flex-col md:items-start grid-rows-subgrid items-center"> 
            <h4 className="font-semibold " >{title}</h4>
           <p className="text-xs">{description}</p></div>
         </div>
      
       
        </>
    )
    
    }