import axios from "axios";
import Cookies from "js-cookie";

const network = axios.create();

const getAccessToken = () => Cookies.get("accessToken");

network.interceptors.request.use((config) => {
  config.headers.authorization = `bearer ${getAccessToken()}`;
  return config;
});

network.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response && error.response.status;
    const originalRequest = error.config;
    if (status === 403) {
      try {
        const accessToken = await network.post("/auth/token", {
          email: Cookies.get("email"),
        });
        Cookies.set({ accessToken: accessToken.data });
        const data = await network(originalRequest);
        return data;
      } catch (err) {
        throw err;
      }
    } else {
      throw error;
    }
  }
);

export default network;
