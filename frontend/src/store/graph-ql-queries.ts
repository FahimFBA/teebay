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
