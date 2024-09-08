import styled from "styled-components";
import Button from "../../../../components/button/Button";
import interparkIcon from "../../../../../public/assets/images/icons/site/interpark.svg";
import melonticketIcon from "../../../../../public/assets/images/icons/site/melonticket.svg";
import tickelinkIcon from "../../../../../public/assets/images/icons/site/tickelink.svg";
import yes24Icon from "../../../../../public/assets/images/icons/site/yes24.svg";
import { useState } from "react";

const NavContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const RecordNavigate = ({
  records,
  myThemeSite,
  setFilteredRecords,
  setClickThemeSite,
  setActivePage
}) => {
  //클릭했을 경우 css 변경
  const [isClick, setIsClick] = useState({
    //기본창 : 인터파크 기록
    interpark: false,
    melonticket: false,
    ticketlink: false,
    yes24: false,
    [myThemeSite]: true
  });
  const handleClick = (name) => {
    setClickThemeSite(name);
    //클릭했을 시 css 변경용
    setIsClick(() => {
      return {
        interpark: false,
        melonticket: false,
        ticketlink: false,
        yes24: false,
        [name]: true
      };
    });
    //데이터 필터링
    setFilteredRecords(() => records.filter((item) => item.themeSite === name));
    setActivePage(1);
  };
  const typeName = (name) => {
    return isClick[name] ? "record-onclick" : "record";
  };

  return (
    <NavContainer>
      <Button
        type={typeName("interpark")}
        icon={interparkIcon}
        icontype="record"
        text="인터파크 티켓"
        onClick={() => handleClick("interpark")}
      />
      <Button
        type={typeName("melonticket")}
        icon={melonticketIcon}
        icontype="record"
        text="멜론 티켓"
        onClick={() => handleClick("melonticket")}
      />
      <Button
        type={typeName("ticketlink")}
        icon={tickelinkIcon}
        icontype="record"
        text="티켓 링크"
        onClick={() => handleClick("ticketlink")}
      />
      <Button
        type={typeName("yes24")}
        icon={yes24Icon}
        icontype="record"
        text="yes24"
        onClick={() => handleClick("yes24")}
      />
    </NavContainer>
  );
};
export default RecordNavigate;
