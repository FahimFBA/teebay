import { IAuthData, LoginDataType, IFilterState } from "@/Types";

export const initialRegisterDataState: IAuthData = {
  name: "",
  email: "",
  password: "",
};

export const initialLoginDataState: LoginDataType = {
  email: "",
  password: "",
};

export const initialFiltersState: IFilterState = {
  page: 1,
  pageSize: 9,
  condition: {
    category: "",
    minPrice: 0,
    maxPrice: 0,
  },
};
