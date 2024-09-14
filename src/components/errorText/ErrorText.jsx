import styled from "styled-components";
import InfoIcon from "/public/assets/images/icons/errorInfo.svg?react";

const ErrorTextContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 400px;
  max-width: 400px;
  max-height: 30px;
  background-color: var(--sub-color-interpark);
  padding: 8px;
  border-radius: 8px;
`;

const ErrorTextMessage = styled.span`
  color: var(--point-color);
  font-family: "pretendardB";
  font-size: 18px;
`;

const ErrorText = ({ text }) => {
  return (
    <ErrorTextContainer>
      <InfoIcon />
      <ErrorTextMessage>{text}</ErrorTextMessage>
    </ErrorTextContainer>
  );
};

export default ErrorText;
