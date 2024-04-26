import axios from "axios";

class AuthService {
  async login(email, password) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      );

      if (response.data.Token) {
        localStorage.setItem(
          process.env.SECRET_KEY_JWT,
          JSON.stringify(response.data.Token)
        );
        return response;
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle the case where the email and password are invalid
        throw new Error("Email and password are invalid");
      } else {
        // Handle other errors
        throw error;
      }
    }
  }

  async logout() {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(process.env.SECRET_KEY_JWT);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  async register(username, email, password) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        {
          User_username: username,
          User_email: email,
          User_password: password,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle the case where the email and password are invalid
        throw new Error("Email and password are invalid");
      } else {
        // Handle other errors
        throw error;
      }
    }
  }
}

export default new AuthService();
