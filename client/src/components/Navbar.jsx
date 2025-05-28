import { GiHamburgerMenu } from "react-icons/gi";
import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { supabase } from "../utils/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { useSideBarContext } from "../context/SidebarContext";

export function StickyNavbar() {
  const navigate = useNavigate();
  const { expand, setExpand } = useSideBarContext();

  const toggleExpand = () => {
    setExpand(!expand);
  };

  // Function to handle user logout
  const logout = () => {
    const { error } = supabase.auth.signOut();
    if (!error) {
      navigate("/"); // Redirect to home page after logout
    }
  };

  // State to manage the mobile navigation menu toggle
  const [openNav, setOpenNav] = React.useState(false);

  // Effect to close the mobile navigation menu on window resize
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Navigation list for desktop and mobile views
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Dashboard Link */}
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal text-base group hover:cursor-pointer"
      >
        <Link to={"/dashboard"} className="flex items-center gap-2">
          <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            🏠 {/* Icon for Dashboard */}
          </span>
          Dashboard
        </Link>
      </Typography>

      {/* Resources Link */}
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal text-base group hover:cursor-pointer"
      >
        <Link to="/resources" className="flex items-center gap-2">
          <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            📚 {/* Icon for Resources */}
          </span>
          Resources
        </Link>
      </Typography>

      {/* Event Planner Link */}
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal text-base group hover:cursor-pointer"
      >
        <Link to="/event-planner" className="flex items-center gap-2">
          <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            📅 {/* Icon for Event Planner */}
          </span>
          Event Planner
        </Link>
      </Typography>

      {/* Chat Link */}
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal text-base group hover:cursor-pointer"
      >
        <Link to="/chat" className="flex items-center gap-2">
          <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            💬 {/* Icon for Chat */}
          </span>
          Chat
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px]">
      {/* Navbar container */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-8 shadow-none">
        <div className="flex items-center text-blue-gray-900 ">
          <div className="w-full flex items-center justify-between gap-4 ">
            {/* GiHamburgerMenu Icon */}
            <button onClick={toggleExpand} className="hidden lg:block">
              <GiHamburgerMenu className="text-3xl" />
            </button>

            <div className="flex items-center gap-x-8">
              {/* Desktop Navigation */}
              <div className="hidden lg:block">{navList}</div>

              {/* Logout Button for Desktop */}
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={logout}
              >
                <span>Log Out</span>
              </Button>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                // Close Icon for Mobile Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon for Mobile Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {/* Logout Button for Mobile */}
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              onClick={logout}
            >
              <span>Log Out</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
