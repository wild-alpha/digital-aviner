import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, children }) => {
  return (
    <div >
      {/* Menu Links */}
      <ul className="flex flex-col py-4 items-center space-y-6 text-white text-xl">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>

      {/* Bottom Section for Additional Content */}
      <div className="flex justify-center items-center py-4">
        {children}
      </div>
    </div>
  );
};

export default MenuOverlay;