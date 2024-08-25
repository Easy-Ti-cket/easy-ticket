import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import { themeSiteAtom, levelAtom } from "../../../store/atom";
import { useAtomValue, useSetAtom } from "jotai";
import interparkIcon from "../../../assests/images/icons/site/interpark.svg";
import melonticketIcon from "../../../assests/images/icons/site/melonticket.svg";
import tickelinkIcon from "../../../assests/images/icons/site/tickelink.svg";
import yes24Icon from "../../../assests/images/icons/site/yes24.svg";

const SelectSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

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
  const navigate = useNavigate();
  const setThemeSite = useSetAtom(themeSiteAtom);

  const handleClick = (path, themeSite) => {
    setThemeSite(themeSite); // 해당 사이트의 테마로 변경
    navigate(path);
  };

  const sites = [
    {
      name: "인터파크 티켓",
      icon: interparkIcon,
      path: "/challenge/interpark/step0",
      theme: "interpark"
    },
    {
      name: "멜론티켓",
      icon: melonticketIcon,
      path: "/challenge/melonticket/step0",
      theme: "melonticket"
    },
    {
      name: "티켓링크",
      icon: tickelinkIcon,
      path: "/challenge/ticketlink/step0",
      theme: "ticketlink"
    },
    {
      name: "예스24(YES24)",
      icon: yes24Icon,
      path: "/challenge/yes24/step0",
      theme: "yes24"
    }
  ];

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
              onClick={() => handleClick(site.path, site.theme)}
              type="mode"
            />
          </ButtonBox>
        ))}
      </ButtonContainer>
    </SelectSiteContainer>
  );
};

export default SelectSite;
