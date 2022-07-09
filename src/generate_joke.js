import axios from "axios";

const generateJoke = () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  return axios
    .get("https://icanhazdadjoke.com", config)
    .then((res) => res.data.joke);
};

export default generateJoke;
