import styled from "styled-components";
import InfoIcon from "../assests/images/icons/errorInfo.svg?react";

const ErrorTextContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 20px;
  padding: 10px;
  background-color: var(--sub-color);
  justify-content: center;
  border-radius: 8px;
`;

const ErrorTextMessage = styled.span`
  color: var(--point-color);
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
