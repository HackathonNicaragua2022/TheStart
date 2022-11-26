import React, { useEffect } from "react";
import { MainRouter } from "./App";
import { useStateContext } from "./../contexts/ContextProvider";
import { Login } from "./../pages/Login";

export const IndexRoutes = () => {
  const { isClicked } = useStateContext();
  //return isClicked.userProfile ? <MainRouter /> : <Login />;
  return <MainRouter />;
};
