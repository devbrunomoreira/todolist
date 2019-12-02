import axios from 'axios';

const instance = axios.create({
  baseURL: "https://bruno-todolist.firebaseio.com/"
});

export default instance;