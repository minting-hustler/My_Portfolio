import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 text-white font-["Neue Montral"] flex justify-between items-center'>
      <div className="logo">
        <img className='w-15 h-16'src="public\asset\IITj.png" alt="" />
      </div>
      <div className="links flex gap-10">
        {["Projects", "About ME", "experience", "Contact"].map((item, index) =>
          // item === "About ME" ? (
          //   <Link
          //     key={index}
          //     to={`/${item.replace(" ", "").toLowerCase()}`}
          //     className={`text-lg capitalize font-light ${
          //       index === 3 && "ml-32"
          //     }`}
          //   >
          //     {item}
          //   </Link>
          // ) : 
          (
            <ScrollLink
              key={index}
              to={item.replace(" ", "").toLowerCase()}
              smooth={true}
              duration={800}
              className={`text-lg capitalize font-light ${
                index === 3 && "ml-32"
              }`}
            >
              {item}
            </ScrollLink>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
