import axios from "axios";

interface User{
  roleUser: number;
}


export const GetUser = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/user/all`
    );
    return response.data["User"] as User[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const FilterUserByRole = async (roleUser : number) => {
    try {
      const users = await GetUser()
      const filteredUsers = users.filter(role => role.roleUser === roleUser);
      return filteredUsers;
    } catch (error) {
      console.error("Error filtering track statuses by description:", error);
      return [];
    }
  };