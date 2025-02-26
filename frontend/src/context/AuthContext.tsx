import React from 'react';
import { makeVar, useReactiveVar, ApolloClient, InMemoryCache, gql, createHttpLink, from, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

interface User {
  id: number
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const isAuthenticatedVar = makeVar<boolean>(!!localStorage.getItem('token'));
export const userVar = makeVar<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', 
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache,
});

export const login = (token: string, user: User) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  isAuthenticatedVar(true);
  userVar(user);
  client.writeQuery({
    query: gql`
      query GetUser {
        user {
          id
          email
          name
          createdAt
          updatedAt
        }
      }
    `,
    data: { user },
  });
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  isAuthenticatedVar(false);
  userVar(null);
  client.resetStore();
};

export const updateUser = (updatedUser: User) => {
  localStorage.setItem('user', JSON.stringify(updatedUser));
  userVar(updatedUser);
  client.writeQuery({
    query: gql`
      query GetUser {
        user {
          id
          email
          name
          createdAt
          updatedAt
        }
      }
    `,
    data: { user: updatedUser },
  });
};

export const useAuth = () => {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const user = useReactiveVar(userVar);
  return { isAuthenticated, user, login, logout, updateUser };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};
