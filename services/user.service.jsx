import axios from "axios";
import authHeader from "./auth.header";

class UserService {
  // Authentication System

  getUserBoard() {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/user`, { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/admin`, { headers: authHeader() });
  }
}

const UserServices = new UserService();
export default UserServices;
