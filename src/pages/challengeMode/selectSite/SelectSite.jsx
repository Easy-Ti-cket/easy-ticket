import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import { themeSiteAtom, levelAtom } from "../../../store/atom";
import { useAtomValue, useSetAtom } from "jotai";

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
  const setLevel = useSetAtom(levelAtom);

  const handleClick = (path, themeSite) => {
    setThemeSite(themeSite); // 해당 사이트의 테마로 변경
    setLevel("high"); // 고급 난이도로 변경
    navigate(path);
  };
  const iconSrc = {
    interpark: "/assets/images/icons/site/interpark.svg?react",
    melonticket: "/assets/images/icons/site/melonticket.svg?react",
    ticketlink: "/assets/images/icons/site/tickelink.svg?react",
    yes24: "/assets/images/icons/site/yes24.svg?react"
  };

  const sites = [
    {
      name: "인터파크 티켓",
      icon: iconSrc.interpark,
      path: "/challenge/interpark/step0",
      theme: "interpark"
    },
    {
      name: "멜론티켓",
      icon: iconSrc.melonticket,
      path: "/challenge/melonticket/step0",
      theme: "melonticket"
    },
    {
      name: "티켓링크",
      icon: iconSrc.ticketlink,
      path: "/challenge/ticketlink/step0",
      theme: "ticketlink"
    },
    {
      name: "예스24(YES24)",
      icon: iconSrc.yes24,
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
