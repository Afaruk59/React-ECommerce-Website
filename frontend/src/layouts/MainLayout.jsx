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
    // Modal'ın daha önce gösterilip gösterilmediğini kontrol et
    const hasSeenDialog = localStorage.getItem("hasSeenNewsletterDialog");

    if (!hasSeenDialog) {
      // İlk ziyaret ise 3 saniye sonra modal'ı göster
      setTimeout(() => {
        setIsDialogOpen(true);
      }, 3000);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsDialogOpen(false);
    // Modal kapatıldığında localStorage'a kaydet
    localStorage.setItem("hasSeenNewsletterDialog", "true");
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
