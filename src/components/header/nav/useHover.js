//hover속성 관련 커스텀 훅

import { useState } from "react";

const useHover = () => {
  //hover된 여부
  const [isHovered, setIsHovered] = useState(false);
  //어떤 navigator이 hover됐는지
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHoveredItemEnter = (item) => {
    setHoveredItem(item);
  };
  const handleHoverItemLeave = () => {
    setHoveredItem(null);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    hoveredItem,
    handleHoveredItemEnter,
    handleHoverItemLeave,
    handleMouseLeave,
    handleMouseEnter,
  };
};
export default useHover;
