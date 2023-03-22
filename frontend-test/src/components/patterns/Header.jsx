import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <nav className="bg-black w-screen flex items-center justify-center h-20">
            <Link to={"/"}><h1 className="text-white text-5xl ml-4">Blog</h1></Link>

        </nav>
    )
}

export default Header;