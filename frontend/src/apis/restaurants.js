import axios from 'axios';
import { restaurantsIndex } from '../usls/index'

export const fetchRestaurants = async () => {
  return await axios.get(restaurantsIndex)
    .then(res => {
      return res.date
    })
    .catch((e) => console.error(e))
}
