'use client';
import React, { createContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleSideBarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <LayoutContext.Provider value={{ drawerOpen, toggleDrawer, isSidebarOpen, handleSideBarToggle }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
