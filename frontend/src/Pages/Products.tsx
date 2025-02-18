import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_PRODUCTS = gql`
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

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
}

interface ProductsData {
  products: {
    products: Product[];
    totalCount: number;
    hasNextPage: boolean;
  };
}

export const Products = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { loading, error, data } = useQuery<ProductsData>(GET_PRODUCTS, {
    variables: {
      page,
      pageSize,
      filters: {
        category: "Electronics",
        minPrice: 100,
        maxPrice: 1000,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data?.products.products || [];
  const totalCount = data?.products.totalCount || 0;
  const hasNextPage = data?.products.hasNextPage || false;

  return (
    <div className="container max-w-7xl mx-auto my-3">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Price: ${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p>
          Showing {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, totalCount)} of {totalCount} products
        </p>
        <div>
          <Button onClick={() => setPage(page - 1)} disabled={page === 1} className="mr-2">
            Previous
          </Button>
          <Button onClick={() => setPage(page + 1)} disabled={!hasNextPage}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
