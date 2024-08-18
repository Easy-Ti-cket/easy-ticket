import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import { themeSiteAtom } from "../../../store/atom";
import { useSetAtom } from "jotai";
const SelectSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
import interparkIcon from "../../../assests/images/icons/site/interpark.svg";
import melonticketIcon from "../../../assests/images/icons/site/melonticket.svg";
import tickelinkIcon from "../../../assests/images/icons/site/tickelink.svg";
import yes24Icon from "../../../assests/images/icons/site/yes24.svg";

const Instructions = styled.p`
  margin-top: 20px;
  font-family: pretendardB;
  font-size: 25px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 50px;
`;

const ButtonBox = styled.div`
  margin: 30px;
`;

const SelectSite = () => {
  const nav = useNavigate();
  const setThemeSite = useSetAtom(themeSiteAtom);
  const sites = [
    { name: "인터파크 티켓", icon: interparkIcon, path: "/interpark" },
    { name: "멜론티켓", icon: melonticketIcon, path: "/melonticket" },
    { name: "티켓링크", icon: tickelinkIcon, path: "/ticketlink" },
    { name: "예스24(YES24)", icon: yes24Icon, path: "/yes24" }
  ];

  const handleClick = (path) => {
    //site 종류를 sessionStorage에 저장
    setThemeSite(path.replace("/", ""));
    nav(path);
  };

  return (
    <SelectSiteContainer>
      <Instructions>
        연습할 <span style={{ color: "var(--key-color)" }}>사이트</span>를
        선택해주세요.
      </Instructions>
      <ButtonContainer>
        {sites.map((site) => (
          <ButtonBox key={site.name}>
            <Button
              text={site.name}
              icon={site.icon}
              onClick={() => handleClick(site.path)}
              type="mode"
            />
          </ButtonBox>
        ))}
      </ButtonContainer>
    </SelectSiteContainer>
  );
};

export default SelectSite;
