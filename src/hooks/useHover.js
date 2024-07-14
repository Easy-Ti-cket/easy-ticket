//hover속성 관련 커스텀 훅

import { useState } from "react";

const useHover = () => {
  //hover된 여부
  const [ishovered, setIsHovered] = useState(false);
  //어떤 navigator이 hover됐는지
  const [hovereditem, setHoveredItem] = useState(null);

  const handleHoveredItemEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    ishovered,
    hovereditem,
    handleHoveredItemEnter,
    handleMouseLeave,
    handleMouseEnter,
  };
};
export default useHover;
