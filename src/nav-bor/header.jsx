import { Searchsection } from "../Search/search.jsx";
import App from "./components/Drawer";
import Modal from "../modal";
import Wishlist from "../Wishlist/Wishlist.jsx";
import Orderlist from "../Order/Order";
import { Message } from "../Message/Message";
import { Equlizzer } from "../Equlizzer/Equlizer.jsx";
import SearchSmall from "../Search/components/SmallSearch.jsx";
import { BuyLumia } from "../PopoverMenu/Popover";
import { Menu } from "../PopoverMenu/MenPopover";
import { WomMen } from "../PopoverMenu/WomenPopover.jsx";
import { Catalog } from "../NavCatalog/Catalog.jsx";
import { Pages } from "../PagesNav/PagesNav.jsx";
import { HomeNav } from "../HomeNav/HomeNav.jsx";
import logo from "../assets/logo/logo.svg";
import { Tooltip } from "react-tooltip";
import equalizer from "../assets/icons/icons8-slider-48.png";
import message from "../assets/icons/chat.png";
import search from "../assets/icons/magnifying-glass.png";
import user from "../assets/icons/people.png";
import heart from "../assets/icons/heart.png";
import cart from "../assets/icons/shopping-bag.png";
import phone from "../assets/icons/telephone.png";
import bar from "../assets/icons/menu-bar.png";

export default function Nav() {
  return (
    <nav className="w-full flex lg:justify-evenly justify-between items-center shadow-md bg-white z-40 p-4  top-0 ">
      {/* Logo */}
      <div className="px-4">
        <a href="/">
          <img src={logo} alt="Logo" className="w-20 lg:w-full" />
        </a>
      </div>

      {/* Mobile Icons */}
      <div className="lg:hidden grid grid-cols-4 items-center gap-4">
        <img src={message} alt="Message" className="w-5" />
        <img src={phone} alt="Phone" className="w-5" />
        <SearchSmall />
          <App />
       
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex lg:gap-6 xl:gap-8 text-gray-700 font-normal text-md items-center">
        <HomeNav />
        <a href="/settings" className="hover:text-blue-600">Settings</a>
        <Pages />
        <Catalog />
        <WomMen />
        <Menu />
        <BuyLumia />
      </ul>

      {/* Icons */}
      <div className="hidden lg:flex items-center gap-4">

        <img src={equalizer} alt="Settings" className="w-5" />
        <Message />
        <Searchsection />
        <Modal />
        <Wishlist />
        <Orderlist />

      </div>
    </nav>
  );
}
