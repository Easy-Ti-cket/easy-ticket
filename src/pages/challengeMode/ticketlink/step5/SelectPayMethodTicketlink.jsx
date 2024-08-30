import styled from "styled-components";
import SelectPayMethod from "./SelectPayMethod";
import { useState } from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectPayMethodTicketlink = () => {
  const [checkedboxes, setCheckedboxes] = useState({
    item1: false,
    item2: false
  });

  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    // 현재 상태를 업데이트
    setCheckedboxes((prev) => {
      const updated = { ...prev, [name]: checked };

      return updated;
    });
    // item2와 item3의 상태를 확인하여 isAllChecked 업데이트
    setIsAllChecked(checkedboxes.item2 && checkedboxes.item3);
  };
  // console.log(checkedboxes);
  return (
    <Wrap>
      <SelectPayMethod isAllChecked={isAllChecked} />
    </Wrap>
  );
};

export default SelectPayMethodTicketlink;
