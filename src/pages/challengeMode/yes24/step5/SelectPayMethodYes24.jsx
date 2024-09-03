import styled from "styled-components";
import SelectPayMethodInterPark from "../../interpark/step5-1/SelectPayMethodInterPark";
import { useState } from "react";
import PayMethodCheckBox from "../../components/payMethod/PayMethodCheckBox";
import PayMethodWarning from "../../components/payMethod/PayMethodWarning";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectPayMethodYes24 = () => {
  const [checkedboxes, setCheckedboxes] = useState({
    item1: false,
    item2: false,
    item3: false
  });

  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    // 현재 상태를 업데이트
    setCheckedboxes((prev) => {
      const updated = { ...prev, [name]: checked };
      //모두 동의하기 선택
      if (updated.item1) {
        setIsAllChecked(true);
        return { item1: true, item2: true, item3: true };
      }
      //모두 동의하기 해제
      if (!updated.item1 && prev.item2 && prev.item3) {
        setIsAllChecked(false);
        return { item1: false, item2: false, item3: false };
      }
      // item2와 item3이 모두 체크된 경우
      if (!updated.item1 && updated.item2 && updated.item3) {
        setIsAllChecked(true);
        return { ...updated, item1: true };
      }
      // item2와 item3의 상태를 확인하여 isAllChecked 업데이트
      setIsAllChecked(checkedboxes.item2 && checkedboxes.item3);
      return updated;
    });
  };

  return (
    <Wrap>
      <SelectPayMethodInterPark isAllChecked={isAllChecked} />
      {/* 경고 문구 */}
      <PayMethodWarning />
      {/* 체크 박스 */}
      <PayMethodCheckBox
        item1Checked={checkedboxes.item1}
        item2Checked={checkedboxes.item2}
        item3Checked={checkedboxes.item3}
        handleChecked={handleChecked}
      />
    </Wrap>
  );
};

export default SelectPayMethodYes24;
