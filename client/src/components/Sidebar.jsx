import { FcSettings } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { BiMessage } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";
import { useSideBarContext } from "../context/SidebarContext";
import image from "../assets/logo.png";

const Sidebar = () => {
  const { expand, setExpand } = useSideBarContext();
  return (
    <div
      class={`hidden relative md:flex h-full min-w-full ${
        expand ? "w-fit gap-y-12 " : "gap-y-0"
      } flex-col bg-white bg-clip-border p-4 text-gray-700 items-center`}
    >
      <div class={`h-32 ${expand ? "w-fit" : "w-20"}`}>
        <img src={image} alt="Brand Logo" className="h-full w-full object-contain"/>
      </div>
      <nav
        class={`flex flex-col ${
          expand ? "gap-y-4" : "gap-y-8"
        } gap-1 p-2 font-sans text-base font-normal text-blue-gray-700`}
      >
        {/* Dashboard */}
        <Link
          to={"/dashboard"}
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class={`grid ${expand ? "mr-4" : "mr-0"} place-items-center text-xl font-extrabold`}>
            <BiHomeCircle />
          </div>
          {expand && <div>Dashboard</div>}
        </Link>

        {/* Resources */}
        <Link
          to={"/resources"}
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class={`grid ${expand ? "mr-4" : "mr-0"} place-items-center text-xl font-extrabold`}>
            <AiOutlineFileText />
          </div>
          {expand && <div>Resources</div>}
        </Link>

        {/* Chat */}
        <Link
          to={"/chat"}
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class={`grid ${expand ? "mr-4" : "mr-0"} place-items-center text-xl font-extrabold`}>
            <BiMessage />
          </div>
          {expand && (
            <>
              Chat
              <div class="grid ml-auto place-items-center justify-self-end">
                <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
                  <span class="">14</span>
                </div>
              </div>
            </>
          )}
        </Link>

        {/* Event Planner */}
        <Link
          to={"/event-planner"}
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class={`grid ${expand ? "mr-4" : "mr-0"} place-items-center text-xl font-extrabold`}>
            <SlCalender />
          </div>
          {expand && <div> Event Planner</div>}
        </Link>

        {/* Settings */}
        <Link
          to={"/settings"}
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class={`grid ${expand ? "mr-4" : "mr-0"} place-items-center text-xl font-extrabold`}>
            <FcSettings className="hover:animate-spin" />
          </div>
          {expand && <div> Settings </div>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
