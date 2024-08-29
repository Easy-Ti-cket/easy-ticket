const CheckBox = () => {
  return (
    <>
      <CheckBoxContainer>
        <CheckBox
          name="item1"
          onChange={handleChecked}
          type="checkbox"
          $bold={true}
        />
        <label>모두 동의합니다.</label>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBox name="item2" type="checkbox" />
        <label>개인정보 수집 및 이용에 동의합니다.</label>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBox name="item3" type="checkbox" />
        <label>취소 수수료 및 취소 기한을 확인하였으며, 동의합니다.</label>
      </CheckBoxContainer>
    </>
  );
};

export default CheckBox;
