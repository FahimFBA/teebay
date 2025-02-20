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
  name: string;
  category: string;
  price: number;
  rent: number;
  productDescription: string;
}

export interface ProductsData {
  products: {
    products: Product[];
    totalCount: number;
    hasNextPage: boolean;
  };
}
