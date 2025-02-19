import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts($page: Int!, $pageSize: Int!, $filters: ProductFilters) {
    products(page: $page, pageSize: $pageSize, filters: $filters) {
      products {
        id
        name
        category
        price
      }
      totalCount
      hasNextPage
    }
  }
`;
