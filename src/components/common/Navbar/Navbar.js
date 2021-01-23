import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, SidebarData } from "./SidebarData";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import styled from "styled-components";
const NavbarHeader = styled.span`
  font-size: 19px;
  opacity: 0.7;
  line-height: 24px;
  color: #a4a6b3;
`;
function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars
            onClick={showSidebar}
            style={{ color: "#363740" }}
            className="icon burger"
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle nav-logo" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <Logo />

              <NavbarHeader>Dashboard Kit</NavbarHeader>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
