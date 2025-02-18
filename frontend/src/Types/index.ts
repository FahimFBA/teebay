export interface IAuthData {
  name: string;
  email: string;
  password: string;
}

export type LoginDataType = Pick<IAuthData, "email" | "password">;