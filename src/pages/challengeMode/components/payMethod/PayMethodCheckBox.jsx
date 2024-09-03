import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
//동의 버튼
const CheckBoxContainer = styled.div`
  font-size: 14px;
  display: flex;
  gap: 5px;
  align-items: center;
`;
const CheckBox = styled.input`
  color: ${(props) =>
    props.$bold ? "var(--text-color2)" : "var(--text-color)"};
`;

const PayMethodCheckBox = ({
  handleChecked,
  item1Checked,
  item2Checked,
  item3Checked
}) => {
  return (
    <Wrap>
      <CheckBoxContainer>
        <CheckBox
          name="item1"
          onChange={handleChecked}
          type="checkbox"
          $bold={true}
          checked={item1Checked}
        />
        <label>모두 동의합니다.</label>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBox
          name="item2"
          onChange={handleChecked}
          type="checkbox"
          checked={item2Checked}
        />
        <label>개인정보 수집 및 이용에 동의합니다.</label>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBox
          name="item3"
          onChange={handleChecked}
          type="checkbox"
          checked={item3Checked}
        />
        <label>취소 수수료 및 취소 기한을 확인하였으며, 동의합니다.</label>
      </CheckBoxContainer>
    </Wrap>
  );
};

export default PayMethodCheckBox;
