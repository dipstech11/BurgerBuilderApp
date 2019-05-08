import axios from 'axios'


const instance = axios.create({
  baseURL : "https://burgerbuilder-1aa84.firebaseio.com/"
})

export default instance
