import React, { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import { useLocation  } from "react-router-dom";
import useHandleResize from "lib/device/handleResize";

export default function Layout({ children }) {

  useHandleResize();
  
  let location = useLocation();

  useEffect(()=> {

    window.scrollTo(0,0);

  }, [location.pathname])


  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
