import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-clone-b29a2.cloudfunctions.net/api'
});

export default instance;
//http://localhost:5001/clone-b29a2/us-central1/api