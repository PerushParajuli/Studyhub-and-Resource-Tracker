import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [email, setEmail] = useState();
  const { session } = UserAuth();

  useEffect(() => {
    setEmail(session?.user?.email);
  }, []);

  return (
    <div className="flex-1 h-full"> 
      {/* Content Area */}
      <div className="h-full flex flex-col gap-4">
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
          <div className="md:col-span-1 bg-yellow-300 p-4">
            DUE SOON ASSIGNMENTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
