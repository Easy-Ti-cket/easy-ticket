import styled from "styled-components";
import { useState, useEffect } from "react";
import PayMethodCheckBox from "../../components/payMethod/PayMethodCheckBox";
import PayMethodWarning from "../../components/payMethod/PayMethodWarning";
import SelectPayMethodChallenge from "../../components/payMethod/SelectPayMethodChallenge";
import ErrorText from "../../../../components/errorText/ErrorText";
import { progressAtom } from "../../../../store/atom";
import { useSetAtom } from "jotai";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ErrorTextContainer = styled.div`
  display: inline-flex;
`;

const SelectPayMethodYes24 = () => {
  const setProgress = useSetAtom(progressAtom);
  useEffect(() => setProgress(5), []);

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
      return updated;
    });
  };

  //ErrorText 및 error css 제어용
  const [showError, setShowError] = useState(false);

  return (
    <Wrap>
      <SelectPayMethodChallenge
        isAllChecked={isAllChecked}
        setShowError={setShowError}
      />
      {showError && (
        <ErrorTextContainer>
          <ErrorText text="개인정보 수집 및 제공 동의 항목에 체크해 주세요" />
        </ErrorTextContainer>
      )}
      {/* 경고 문구 */}
      <PayMethodWarning />
      {/* 체크 박스 */}
      <PayMethodCheckBox
        item1Checked={checkedboxes.item1}
        item2Checked={checkedboxes.item2}
        item3Checked={checkedboxes.item3}
        handleChecked={handleChecked}
        hasError={showError}
      />
    </Wrap>
  );
};

export default SelectPayMethodYes24;
