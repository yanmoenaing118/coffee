import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { ReactComponent as IconAccount } from "assets/icons/profile.svg";
import { ReactComponent as IconCart } from "assets/icons/add-to-cart.svg";
import { ReactComponent as IconSearch } from "assets/icons/search.svg";
import Logo from "assets/images/logo.svg";

import useDevice from "lib/device";

const leftNavItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/menu",
    label: "Menu",
  },
  {
    href: "/products",
    label: "products",
  },
  {
    href: "/blogs",
    label: "blog",
  },
];

const Header = styled(motion.header)`
  height: var(--header-height);
  background-color: #222222;
  overflow: hidden;
  border-bottom: 1px solid #505050;
  transition: height .2s ease;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  max-width: var(--max-width);
  margin: 0 auto;
`;
const UL = styled.ul`
  display: flex;
  gap: 5rem;
  li a {
    font-family: var(--family-h-medium);
    color: #afafaf;
    font-size: var(--text-4);
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px;
  }
  li {
    &:last-child {
      margin-right: 0;
    }
  }
`;
const LeftNavs = styled(UL)`
  align-items: center;
`;
const RightNavs = styled(UL)`
  align-items: center;
`;
const CenteredLogo = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  img {
    max-height: calc(var(--header-height) + 3rem);
  }
`;

const HamburgerMenu = styled.div`
  --h-menu-size: 40px;
  width: var(--h-menu-size);
  height: var(--h-menu-size);
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > span {
    display: block;
    height: 2px;
    background-color: white;
    margin: 0.5rem;
  }
`;

const ActiveLink = (props) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          display: "block",
          color: isActive ? "var(--primary-color)" : "#afafaf",
        };
      }}
      {...props}
    >
      {props.children}
    </NavLink>
  );
};

export default function HeaderSection() {
  const device = useDevice();

  return (
    <Header
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
    >
      <Nav>
        {device !== "xlg" && <MobileMenu />}
        {device === "xlg" && <LeftNavLinks />}
        <CenteredLogo>
          <img src={Logo} alt="Mountaineer Coffee logo" />
        </CenteredLogo>
        {device === "xlg" && <RightNavLinks />}
        {device !== "xlg" && <MobileCart />}

      </Nav>
    </Header>
  );
}

function MobileMenu() {
  return (
    <HamburgerMenu>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerMenu>
  );
}

function MobileCart() {
  return <div>
    <IconCart />
  </div>
}

function LeftNavLinks() {
  return (
    <LeftNavs>
      {leftNavItems.map((item) => (
        <li key={item.label}>
          <ActiveLink to={item.href}>{item.label}</ActiveLink>
        </li>
      ))}
    </LeftNavs>
  );
}

function RightNavLinks() {
  return (
    <RightNavs>
      <li>
        <ActiveLink to="/about">About us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">contact</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/cart">
          <IconCart />
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/search">
          <IconSearch />
        </ActiveLink>
      </li>

      <li>
        <ActiveLink to="/profile">
          <IconAccount />
        </ActiveLink>
      </li>
    </RightNavs>
  );
}
