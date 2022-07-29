import axios from 'axios';

const baseUrl = "https://cors-anywhere.herokuapp.com/'https://api.yelp.com/v3/businesses/search?location="
const APIKEY = "h5i9usu07WUyEI-ZTqSDboI7sde6IyzTRtyaUriTFhM6Jm4N5am-YW7144xcB-QV0kT5H92TDgA9GrXEqn-mt8cz48b34fIvEC7r2g7hTcN5_le_KQzeTO2Tda7fYnYx"
const headers = {
    Authorization:`Bearer ${APIKEY}`
}
const axiosInstance = axios.create({
  baseURL:baseUrl,
   headers 
})

export default axiosInstance