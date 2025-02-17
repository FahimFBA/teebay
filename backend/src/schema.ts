import { gql } from "apollo-server-express";
import { DocumentNode } from "graphql";

export const typeDefs: DocumentNode = gql`
  type User {
    id: Int!
    email: String!
    name: String
    createdAt: String!
    updatedAt: String!
    products: [Product!]!
  }

  type Product {
    id: Int!
    owner: User!
    name: String!
    category: String!
    price: Float!
    rent: Float
    rentedTo: Int
    createdAt: String!
    updatedAt: String!
  }

  type PaginatedUsers {
    users: [User!]!
    totalCount: Int!
    hasNextPage: Boolean!
  }

  type PaginatedProducts {
    products: [Product!]!
    totalCount: Int!
    hasNextPage: Boolean!
  }

  input CreateUserInput {
    email: String!
    password: String!
    name: String
  }

  input CreateProductInput {
    ownerId: Int!
    name: String!
    category: String!
    price: Float!
    rent: Float
  }

  input UpdateProductInput {
    name: String
    category: String
    price: Float
    rent: Float
  }

  input ProductFilters {
    category: String
    minPrice: Float
    maxPrice: Float
  }

  type Query {
    users(page: Int, pageSize: Int): PaginatedUsers!
    user(id: Int!): User
    products(
      page: Int
      pageSize: Int
      filters: ProductFilters
    ): PaginatedProducts!
    product(id: Int!): Product
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    createUser(input: CreateUserInput!): User!
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: Int!, input: UpdateProductInput!): Product!
    deleteProduct(id: Int!): Product!
    rentProduct(id: Int!, rentedTo: Int!): Product!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;
