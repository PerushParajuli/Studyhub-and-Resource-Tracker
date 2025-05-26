import React from "react";
import { StickyNavbar } from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar for md/lg screens */}
      <div className="sm:w-1/6">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-5/6 flex flex-col">
        <StickyNavbar />
        {/* Content Area */}
        <div className="flex-1 p-4">
          <Outlet /> {/* Dynamic content will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;