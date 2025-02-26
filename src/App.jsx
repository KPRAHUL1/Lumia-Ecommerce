import './App.css'
import Api from './Api/api'
// import HomePage from './RouteVariable/home'
import Carts from './carts-section/carts'
import Marquee from './Marquee/marquee'
import Nav from './nav-bor/header'
import Shop_section from './shop-info/shop-section'
import Slider from './swiper-slider/slider'
import ShoppingCart from './Shopping-Cart/Shopping-Cards'
import Look_image from './Our-Look/look-images'
import Our_Brands from './Our-brands/our-brands'
import Footer from './Footer-section/footer'
import Image_collection from './Shop-collection/image-collection'
import Shoessection from './Ourlook/shoes';
import People from './PeoplesSay/people';
import Bottomnav from './BottomNav/Bottomnav'
import HomePage from './RouteVariable/home'
import MotionBanner from './components/MotionBanner/banner'
import LookbookSection from './components/LookBook/Lookbook'
import ProductShowcase from './components/Product/ProductShowcase'
import ProductShowcase1 from './components/Product/ProductShowcase'
// import StateVariable from './state'

function App() {
  return (
    <>
  <div className="bg-gray-50">
     {/* <StateVariable/> */}
     <Nav/> 
   {/* <Slider/>   */}
   <MotionBanner/>
     <Shop_section/>
    <Marquee/>
    <Carts/>
    <ProductShowcase/>
    <LookbookSection/>
    {/* <ProductShowcase1/> */}
    {/* <ShoppingCart/>  */}
    <Shoessection/>
    <Our_Brands/>
    <People/>
    <Image_collection/>
    <Footer/>
   <Bottomnav/>
   {/* <Api/> */}
   {/* <HomePage/> */}
    </div> 
    </> 
  )
}
export default App
