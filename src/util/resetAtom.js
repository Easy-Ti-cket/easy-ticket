const resetAtom = () => {
  sessionStorage.removeItem("fakeAllowedSeat");
  sessionStorage.removeItem("selectedPoster");
  sessionStorage.removeItem("allowedSeat");
  sessionStorage.removeItem("isSeatSelected");
  sessionStorage.removeItem("isSectionSelected");
  sessionStorage.removeItem("allowedSection");
  sessionStorage.removeItem("seatCount");
  sessionStorage.removeItem("seatInfo");
  sessionStorage.removeItem("posterId");
  sessionStorage.removeItem("level");
  sessionStorage.removeItem("stepTextNumber");
  sessionStorage.removeItem("minute");
  sessionStorage.removeItem("helpTextNumber");
  sessionStorage.removeItem("fakeAllowedSeat");
  sessionStorage.removeItem("isDelivered");
};

export default resetAtom;
