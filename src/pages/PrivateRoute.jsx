import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  //로컬 스토리지에 이름과 난이도가 설정되지 않았다면 메인 화면으로 이동
  const isUser = sessionStorage.getItem("userName");
  const isSelectedLevel = sessionStorage.getItem("level");
  const isSelectedSite = sessionStorage.getItem("themeSite");
  return isUser && (isSelectedLevel || isSelectedSite) ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
