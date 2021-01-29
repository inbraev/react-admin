import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo, SidebarData } from "./SidebarData";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import styled from "styled-components";
const NavbarHeader = styled.span`
  font-size: 19px;
  opacity: 0.7;
  line-height: 24px;
  color: #dde2ff;
  /* color: #a4a6b3; не подходит по рекомендации контраста  */
`;
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Link to="#" className="menu-bars" title="open menu">
        <FaBars
          onClick={showSidebar}
          style={{ color: "#363740" }}
          onKeyDown={showSidebar}
          tabIndex="0"
          className="icon burger"
          title="menu"
        />
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li
            className="navbar-toggle nav-logo"
            onClick={showSidebar}
            tabIndex="0"
          >
            <Link
              to="#"
              className="menu-bars"
              onKeyDown={showSidebar}
              tabIndex="0"
            >
              <Logo />
              <NavbarHeader>Dashboard Kit</NavbarHeader>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  activeClassName="selected"
                  exact
                  to={item.path}
                  onClick={showSidebar}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
