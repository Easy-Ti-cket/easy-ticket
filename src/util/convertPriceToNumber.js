// 가격 문자열을 숫자로 변환
function convertPriceToNumber(priceStr) {
  return parseInt(priceStr.replace(/,/g, "").replace("원", ""), 10);
}

export default convertPriceToNumber;
