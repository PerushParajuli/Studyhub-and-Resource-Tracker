import { createBrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import EventPlanner from "./pages/EventPlanner";
import MainLayout from "./components/MainLayout";
import Resources from "./pages/Resources";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  { path: "/", element: <Authentication /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/event-planner", element: <EventPlanner /> },
      { path: "/resources", element: <Resources /> },
      { path: "/chat", element: <Chat /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);
