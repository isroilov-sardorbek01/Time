import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="container flex justify-between p-3 shadow-xl items-center rounded-md ">
            <div className="text-[40px]">Time</div>
            <div className="flex gap-3">
                <NavLink className="hover:underline" to="/">
                    Digital Soat
                </NavLink>
                <NavLink className="hover:underline" to="/2">
                    Taymer Ilovasi
                </NavLink>
                <NavLink className="hover:underline" to="/3">
                    Mahaliy vaqt
                </NavLink>
            </div>
            <div className="text-[40px]">Tochno</div>
        </div>
    );
}

export default Header;
