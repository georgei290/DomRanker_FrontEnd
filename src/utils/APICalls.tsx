import axios from "axios";
import Swal from "sweetalert2";
import { iRegister, iSign, iEmail, iPassword } from "./interfaces";

const url = "https://dom-ranker.onrender.com";

export const registerUser = async (data: iRegister) => {
  try {
    const mainURL = `${url}/api/user/create-user`;

    await axios
      .post(mainURL, data)
      .then((res) => {
        console.log(res.data.message);
        return res.data.message;
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "You account has been created, please goto your email to finished up!",
          //   title: res.data.message,
          showConfirmButton: false,
          timer: 3500,
        });
      })
      .catch((error: any) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          // title: 'Your work has been saved',
          title: error.response.data.data.split(" ")[0]
            ? "Email already exist, please use another Email"
            : "Something want wrong",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  } catch (error: any) {
    return error;
  }
};

export const signinUser = async (data: iSign) => {
  try {
    const mainURL = `${url}/api/user/login-user`;
    await axios.post(mainURL, data).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const changeUsersPassword = async (data: iPassword, id: string) => {
  try {
    const mainURL = `${url}/api/user/${id}/change-password`;
    await axios.patch(mainURL, data).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const resetUsersPassword = async (data: iEmail) => {
  try {
    const mainURL = `${url}/api/user/reset-password`;
    await axios.post(mainURL, data).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    return error;
  }
};
