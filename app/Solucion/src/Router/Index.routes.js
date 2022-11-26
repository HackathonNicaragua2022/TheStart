import React, { useEffect } from "react";
import { MainRouter } from "./App";
import { useStateContext } from "./../contexts/ContextProvider";
import { Login } from "./../pages/Login";

export const IndexRoutes = () => {
  return (
    //useStateContext().initialState.userProfile ? <MainRouter /> : <Login />
    <MainRouter />
  );
};
