import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false); // Close the menu when a link is clicked
    };

    return (
        <>
            <div className="">
                <div onClick={() => setOpen((prev) => !prev)} className=''>
                    {open ? <RxCross2 /> : <FaBarsStaggered />}
                </div>
                {open && (
                    <div className="absolute bg-black text-white left-0 top-[81px] w-full h-[calc(100vh- -100px)] flex flex-col items-center justify-center gap-8 text-xl py-4 z-10">
                        <Link to ="/" onClick={handleLinkClick}>Home</Link>
                        <Link to ="/pages" onClick={handleLinkClick}>Pages</Link>
                        <Link to ="/shoping" onClick={handleLinkClick}>Products</Link>
                        <Link to ="/blog" onClick={handleLinkClick}>Blog</Link>
                        <Link to ="/shoping" onClick={handleLinkClick}>Shop</Link>
                        <Link to ="/contact" onClick={handleLinkClick}>Contact</Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Menu;