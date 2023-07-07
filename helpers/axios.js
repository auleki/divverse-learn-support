import axios from "axios";

const Axios = axios.create({
  baseUrl: "",
  timeout: 10000,
});

export default Axios;
