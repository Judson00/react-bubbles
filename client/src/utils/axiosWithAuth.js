import Axios from "axios";

export const axiosWithAuth = () => {
  let token = localStorage.getItem(`token`)
  return Axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token;
    }
  });
};