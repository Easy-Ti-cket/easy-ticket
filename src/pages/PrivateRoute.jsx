import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  //로컬 스토리지에 이름과 난이도가 설정되지 않았다면 메인 화면으로 이동
  const isUser = sessionStorage.getItem("userName");
  const isSelectedLevel = sessionStorage.getItem("level");
  const isSelectedSite = sessionStorage.getItem("themeSite");
  //step0 화면에서는 이름만 인식 (실전, 연습)
  const location = useLocation().pathname;
  if (location.includes("step0")) {
    console.log("path0 전용 PrivateRoute적용됨");
    return isUser ? element : <Navigate to="/" />;
  }
  return isUser && (isSelectedLevel || isSelectedSite) ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
