import axios from "axios";
import { iRegister, iSign, iEmail, iPassword } from "./interfaces";

const url = "https://dom-ranker.onrender.com";

export const registerUser = async (data: iRegister) => {
  try {
    const mainURL = `${url}/api/user/create-user`;
    await axios.post(mainURL, data).then((res) => {
      return res.data.message;
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
