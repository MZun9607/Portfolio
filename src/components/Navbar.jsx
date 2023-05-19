import React, {useState, useRef} from "react";

import ThreeBarsMenu from "@src/svg/ThreeBarsMenu";




export default function Navbar( props ) {
    const [isOpen, setIsOpen] = useState(false);

    
    function menuOpenClose(){
        setIsOpen(!isOpen);
    }

    function menuClose(){
        setIsOpen(false);
    }

    function scrollToSection(elementRef){
        menuClose();
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        })
        
    }

    return(
        <div className="text-neutral-100 text-base bg-neutral-900 bg-opacity-40 backdrop-blur-md">
            <div className="flex justify-between h-14 w-full">
                <div className="flex-none xl:pl-16 h-full"> 
                    <div className="flex w-64 h-14 ">
                        
                    </div>
                </div>
                <div className="flex lg:hidden items-center flex-none h-full">
                    <button onClick={menuOpenClose} className="flex content-center">
                        <ThreeBarsMenu/>
                    </button>
                </div>
                <ul className="hidden h-full lg:flex lg:flex-1 flex-col-reverse lg:flex-row-reverse lg:items-center">
                    {
                        props.items.map( (item, key) => (
                            <button key={key} className="h-full flex items-center hover:text-darkmodeblue-darkblue hover:bg-opacity-60 hover:bg-white hover:dark:bg-opacity-60" onClick={()=> scrollToSection(item[1])}>
                                <li className="lg:px-6 " > 
                                    {item[0]}
                                </li>   
                            </button>
                        ) )
                    }
                </ul>
            </div>
            <div id="navbar-responsive" className={"w-screen" + (isOpen ? " flex" : " hidden")}>
                <div className="flex flex-col-reverse items-center lg:hidden">
                    {
                        props.items.map( (item, key) => (
                            <button onClick={()=> scrollToSection(item[1])} className="py-2 text-center h-full w-screen text-xl hover:text-darkmodeblue-darkblue hover:bg-opacity-60 hover:bg-white hover:dark:bg-opacity-60" key={key}>
                                {item[0]}
                            </button>
                        ) )
                    }
                </div>
            </div>
        </div> 
    )
}