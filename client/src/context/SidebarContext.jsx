import { createContext, use, useContext, useState } from "react";

const SidebarContext = createContext();

export const SideBarContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(true);
  return (
    <SidebarContext.Provider value={{ expand, setExpand }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBarContext = () => {
  return useContext(SidebarContext);
};
