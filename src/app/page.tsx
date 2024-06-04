"use client";

import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Sidebar from "./component/sidebar/sidebar";
import CardGrid from "./component/drag/DraggableMap";
import Title from "./component/mobile/title";
import Description from "./component/mobile/description";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
  };

  const handleShow = () => {
    setIsVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar isVisible={isVisible} handleShow={handleShow} />
      <div className="hidden md:block">
        <div className="flex flex-1 relative overflow-hidden">
          <Sidebar isVisible={isVisible} handleHide={handleHide} />
          <div className="flex-1 relative overflow-hidden">
            <CardGrid sidebarVisible={isVisible} />
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <Title />
        <Description />
      </div>
    </div>
  );
}
