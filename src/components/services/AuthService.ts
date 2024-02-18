import axios from "axios";
import UrlService from "./UrlService";
import CookieService from "./CookieService";

const expiresAt = 60 * 24;

interface Credentials {
  username: string;
  password: string;
}

class AuthService {
  async doUserVerify(credentials: Credentials) {
    try {
      const response = await axios.post(UrlService.VerifyUrl(), credentials);
      return response.data;
    } catch (error) {
      console.error("Error", error);
      return false;
    }
  }

  async doUserLogin(credentials: Credentials) {
    try {
      const response = await axios.post(UrlService.loginUrl(), credentials);
      return response.data;
    } catch (error) {
      console.error("Error", error);
      return false;
    }
  }
  handleLoginSuccess(response: any, remember: boolean) {
    //debugger
    if (!remember) {
      const options = { path: "/" };
      CookieService.set("chopbook-access_token", response?.data?.token, options);
      return true;
    }

    let date = new Date();
    date.setTime(date.getTime() + expiresAt * 60 * 1000);
    const options = { path: "/", expires: date };
    CookieService.set("chopbook-access_token", response?.data?.token, options);
    return true;
  }
}

export default new AuthService();
