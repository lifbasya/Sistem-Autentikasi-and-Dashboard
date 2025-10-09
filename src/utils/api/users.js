import axios from "axios";


export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/users/${id}`);
    return "Data User berhasil dihapus";
  } catch (error) {
    console.error(error);
  }
};
