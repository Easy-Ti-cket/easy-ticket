import styled from "styled-components";
import Button from "../../../../components/button/Button";
import interparkIcon from "../../../../assests/images/icons/site/interpark.svg";
import melonticketIcon from "../../../../assests/images/icons/site/melonticket.svg";
import tickelinkIcon from "../../../../assests/images/icons/site/tickelink.svg";
import yes24Icon from "../../../../assests/images/icons/site/yes24.svg";

const NavContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const RecordNavigate = () => {
  return (
    <NavContainer>
      <Button
        type="record"
        icon={interparkIcon}
        icontype="record"
        text="인터파크 티켓"
      />
      <Button
        type="record"
        icon={melonticketIcon}
        icontype="record"
        text="멜론 티켓"
      />
      <Button
        type="record"
        icon={tickelinkIcon}
        icontype="record"
        text="티켓 링크"
      />
      <Button type="record" icon={yes24Icon} icontype="record" text="yes24" />
    </NavContainer>
  );
};
export default RecordNavigate;
