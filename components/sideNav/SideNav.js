import React from "react";
import "./sideNav.scss";
import Link from "next/link";

const SideNav = () => {
  const navItems = [
    {
      icon: <i className="fa fa-home"></i>,
      name: "Home",
    },
    {
      icon: <i className="fa fa-user"></i>,
      name: "About",
    },
    {
      icon: <i class="fa fa-file"></i>,
      name: "Resume",
    },
    {
      icon: <i className="fa fa-briefcase"></i>,
      name: "Portfolio",
    },
    {
      icon: <i className="fa fa-envelope"></i>,
      name: "Contact",
    },
  ];

  return (
    <div className="side-menu">
      <ul className="nav-group">
        {navItems?.map((item, index) => (
          <Link
            href={`/${item.name === "Home" ? "" : item.name.toLowerCase()}`}
          >
            <li key={index} className="menu-item">
              {item.icon}
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
