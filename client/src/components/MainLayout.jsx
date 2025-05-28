import React from "react";
import { StickyNavbar } from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import {useSideBarContext} from "../context/SidebarContext"

const MainLayout = () => {
  const {expand, setExpand} = useSideBarContext()
  return (
    <div className="flex h-screen">
      {/* Sidebar for md/lg screens */}
      <div className={` ${expand ? 'lg:w-1/6' : 'w-fit'}`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`w-full ${expand ? 'lg:w-5/6' : 'sm:w-full'} flex flex-col`}>
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