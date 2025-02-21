import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts($page: Int!, $pageSize: Int!, $filters: ProductFilters) {
    products(page: $page, pageSize: $pageSize, filters: $filters) {
      products {
        id
        name
        category
        price
        rent
      }
      totalCount
      hasNextPage
    }
  }
`;

export const REGISTER_USER_QUERY = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      name
    }
  }
`;

export const LOGIN_MUTATION_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_PRODUCT_DETAILS_QUERY = gql`
  query GetProductDetails($id: Int!) {
    product(id: $id) {
      id
      name
      category
      price
      rent
      rentedTo
      createdAt
      updatedAt
      owner {
        id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_USER_PRODUCTS_QUERY = gql`
  query GetUserProducts($userId: Int!) {
    user(id: $userId) {
      id
      name
      email
      products {
        id
        name
        category
        price
        rent
        rentedTo
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_RENTED_PRODUCTS_QUERY = gql`
  query GetRentedProducts($userId: Int!) {
    rentedProducts(rentedTo: $userId) {
      id
      name
      category
      price
      rent
      rentedTo
      createdAt
      updatedAt
      owner {
        id
        name
        email
      }
    }
  }
`;

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProduct($id: Int!, $input: UpdateProductInput!, $release: Boolean) {
    updateProduct(id: $id, input: $input, release: $release) {
      id
      name
      category
      price
      rent
      rentedTo
      updatedAt
      error {
        message
      }
    }
  }
`;

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      category
      price
      rent
    }
  }
`;
