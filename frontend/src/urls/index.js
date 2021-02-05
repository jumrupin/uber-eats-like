const DEFARUT_API_LOCALHOST = "http://localhost:3000/api/v1"

export const restaurantsIndex = `${DEFARUT_API_LOCALHOST}/restaurants`
export const foodsIndex = (restaurantId) =>
  `${DEFARUT_API_LOCALHOST}/restaurants/${restaurantId}/foods`
export const lineFoods = `${DEFARUT_API_LOCALHOST}/line_foods`;
export const lineFoodsReplace = `${DEFARUT_API_LOCALHOST}/line_foods/replace`;
export const orders = `${DEFARUT_API_LOCALHOST}/orders`;
