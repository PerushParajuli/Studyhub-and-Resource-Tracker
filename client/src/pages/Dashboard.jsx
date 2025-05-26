import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StickyNavbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const { session } = UserAuth();

  useEffect(() => {
    setEmail(session?.user?.email);
  }, []);

  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar for md/lg screens */}
        <div className="sm:w-1/6">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-5/6 flex flex-col">
          <StickyNavbar />

          {/* Content Area */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-4 bg-blue-200 grid grid-cols-2 md:grid-cols-5 gap-2">
              <h1>CARD OF COURSES</h1>
              <h1>CARD OF COURSES</h1>
              <h1>CARD OF COURSES</h1>
              <h1>CARD OF COURSES</h1>
              <h1>CARD OF COURSES</h1>
              <h1>CARD OF COURSES</h1>
              <h1>CARD OF COURSES</h1>
              <h1>CARD OF COURSES</h1>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
              <div className="md:col-span-1 bg-green-200 p-4">CALENDAR</div>
              <div className="md:col-span-1 bg-yellow-300 p-4">DUE SOON ASSIGNMENTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
