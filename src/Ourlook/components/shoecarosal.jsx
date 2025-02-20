import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carosalshoe from "./CarosalShoe";

export default function Shoecarosal(){
  const Cards=[
    { image: 'shoe1.1.webp',image1:'shoe2.1.webp', title: 'CLORKS', description: 'Down Jacket Winter.', money: '$37' ,subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish  etc." },
    { image: 'shoe1.2.webp',image1:'shoe2.2.webp', title: 'CALVIN KLEIN', description: 'Loose Padded Jacket', money: '$32' ,subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish  etc."},
    { image: 'shoe1.3.webp',image1:'shoe2.3.webp', title: 'CANVERSE', description: 'Satin Padded Jacket', money: '$46' ,subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish , etc."},
    { image: 'shoe1.4.webp',image1:'shoe2.4.webp', title: 'CALVIN KLEIN', description: 'Padded Short Jacket', money: '$42' ,subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish  etc."},
    { image: 'shoe1.5.webp',image1:'shoe2.5.webp', title: 'CANVERSE', description: "Men's Padded Jacket", money: '$48' ,subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish   etc."},
    { image: 'shoe1.6.webp',image1:'shoe2.6.webp', title: 'CLORKS', description: 'Down Jacket Winter.', money: '$37',subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish   etc." },
    { image: 'shoe1.7.webp',image1:'shoe2.7.webp', title: 'CALVIN KLEIN', description: 'Loose Padded Jacket', money: '$32',subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish   etc." },
    { image: 'shoe1.8.webp',image1:'shoe2.8.webp', title: 'CANVERSE', description: 'Satin Padded Jacket', money: '$46' ,subtitle:"Sneakers are flexible, enduring, sporting footwear. This versatile casual shoe design is available in stylish ,etc."},
  ];
  
  const responsive = {
  
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
return(

    <>
    <div className="xl:mx-20 mt-10"> 
    <Carousel responsive={responsive} transitionDuration={500} 
  draggable={false}
   keyBoardControl={true} removeArrowOnDeviceType={[ "mobile"]}  dotListClass="custom-dot-list-style" className="z-30">
{Cards.map((category, index ) => (
<Carosalshoe key={index} image={category.image} image1={category.image1} subtitle={category.subtitle} title={category.title} money={category.money} description={category.description} />
))}
</Carousel>
    </div>
    </>
  )

}

