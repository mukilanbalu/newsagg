import React from "react";
import { navItems } from "../constants";
import { NavLink } from "react-router-dom";

const NavBar = () => <div>
      <nav className="flex flex-col sm:text-sm">
            {
                navItems.map((nav) => <NavLink key={nav.name} className={"my-3 mx-2 p-4 sm:mx-1 px-1  "} to={nav?.path?.toString()}> {nav.name}</NavLink>

                )}

        </nav>
    </div>

      
export default NavBar;