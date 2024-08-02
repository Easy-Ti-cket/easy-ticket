import convertPriceToNumber from "./convertPriceToNumber";

// 객체를 배열로 변환
function convertPriceObjectToArray(priceObj) {
  const seats = [];

  for (const [seatName, seatPrice] of Object.entries(priceObj)) {
    seats.push({
      grade: seatName,
      price: convertPriceToNumber(seatPrice)
    });
  }

  return seats;
}

export default convertPriceObjectToArray;
