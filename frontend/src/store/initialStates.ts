import { IAuthData, LoginDataType } from "@/Types";

export const initialRegisterDataState: IAuthData = {
  name: "",
  email: "",
  password: "",
};

export const initialLoginDataState: LoginDataType = {
  email: "",
  password: "",
};
