import { useState } from "react";
import Link from "./Link/Link";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";

const Navigationbar = () => {
    const  [isOpen, setIsOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];      


    return (
        <nav className=" text-black p-6 bg-orange-300">
            <div className="btn border-none bg-slate-400 text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineAlignLeft className=""></AiOutlineAlignLeft>
                }
            </div>
            <ul className={` rounded-2xl duration-1000 md:flex absolute md:static 
           ${!isOpen ? 'top-20' : '-top-60'}
           bg-orange-300 px-6 shadow-lg"`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )  
                }
            </ul>
        </nav>
    );
};

export default Navigationbar;