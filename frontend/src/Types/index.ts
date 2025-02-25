export interface IAuthData {
  name: string;
  email: string;
  password: string;
}

export type LoginDataType = Pick<IAuthData, "email" | "password">;

export interface IFilterState {
  page: number;
  pageSize: number;
  condition: {
    category: string;
    minPrice: number;
    maxPrice: number;
  };
}

export interface Product {
  id: string;
  owner: IOwner;
  name: string;
  price: number;
  rent: number;
  rentedTo: number;
  createdAt: string;
  updatedAt: string;
  category: string;
  productDescription: string;
}

export interface ProductsData {
  products: {
    products: Product[];
    totalCount: number;
    hasNextPage: boolean;
  };
}

export interface IOwner {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}