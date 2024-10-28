import Axios from "axios";

const userdata = () => {
  return Axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
};

export default userdata;
