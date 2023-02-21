import axios from "axios";
import { useDispatch } from "react-redux";
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
          showConfirmButton: false,
          timer: 3500,
        });
      })
      .catch((error: any) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
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
    await axios
      .post(mainURL, data)
      .then((res) => {
        console.log("coming from here: ", res.data.data);
        return res.data.data;
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome Back `,
          // title: `Welcome Back ${res.data.data.userName}!`,
          showConfirmButton: false,
          timer: 3500,
        });
      })
      .catch((error: any) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 3500,
        });
      });
  } catch (error: any) {
    return error;
  }
};

export const changeUsersPassword = async (data: iPassword, id: string) => {
  try {
    const mainURL = `${url}/api/user/${id}/change-password`;
    await axios
      .patch(mainURL, data)
      .then((res) => {
        return res.data.data;
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Password has been changed!",
          showConfirmButton: false,
          timer: 3500,
        });
      })
      .catch((error: any) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 3500,
        });
      });
  } catch (error: any) {
    return error;
  }
};

export const congrateCall = async (id: string) => {
  try {
    const mainURL = `${url}/api/user/${id}/verified-user`;
    await axios.get(mainURL);
  } catch (error: any) {
    return error;
  }
};

export const resetUsersPassword = async (data: iEmail) => {
  try {
    const mainURL = `${url}/api/user/reset-password`;
    await axios
      .post(mainURL, data)
      .then((res) => {
        return res.data.data;
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Check Your Email to continue this process!",
          showConfirmButton: false,
          timer: 3500,
        });
      })
      .catch((error: any) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 3500,
        });
      });
  } catch (error: any) {
    return error;
  }
};
