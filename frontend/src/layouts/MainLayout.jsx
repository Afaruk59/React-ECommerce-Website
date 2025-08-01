import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Search from "../components/Modals/Search/Search";
import { useState, useEffect } from "react";
import Dialog from "../components/Modals/Search/Dialog/Dialog";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    //3000ms
    setTimeout(() => {
      setIsDialogOpen(true);
    }, 3000);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Search isOpen={isOpen} handleClose={handleClose} />
      <Dialog isOpen={isDialogOpen} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
