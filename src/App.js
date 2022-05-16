import React from 'react'
import { AboutUsStart } from './Components/Home/AboutUsStart';
import { Navbar1 } from './Components/Home/Navbar1';
import { Footer } from './Components/Reciclados/Footer'
import { FullScreenBuscador } from './Components/Reciclados/FullScreenBuscador';
import { Topbar } from './Components/Reciclados/Topbar'


export const App = () => {

  return (
    <>
      <Topbar />
      <Navbar1 />
      <FullScreenBuscador />
      <AboutUsStart />
      <Footer />
    </>
  );



}
