import { useAtomValue } from "jotai";
import React from "react";
import { Navigate } from "react-router-dom";
import { levelAtom, themeSiteAtom, userNameAtom } from "../store/atom";

const PrivateRoute = ({ element }) => {
  //로컬 스토리지에 이름과 난이도가 설정되지 않았다면 메인 화면으로 이동
  //주소 직접 접근 제한
  const isUser = useAtomValue(userNameAtom);
  const isSelectedLevel = useAtomValue(levelAtom);
  const isSelectedSite = useAtomValue(themeSiteAtom);
  return isUser && (isSelectedLevel || isSelectedSite) ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
