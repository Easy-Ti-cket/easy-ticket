import convertPriceToNumber from "./convertPriceToNumber";
function getRandomSeat(poster) {
  const seatNames = Object.keys(poster.price);

  const randomIndex = Math.floor(Math.random() * seatNames.length);

  const randomSeat = seatNames[randomIndex];

  const randomPrice = convertPriceToNumber(poster.price[randomSeat]);

  return { grade: randomSeat, price: randomPrice };
}

export default getRandomSeat;
