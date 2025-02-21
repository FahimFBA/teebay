import { useAuth } from "@/context/AuthContext";
import { useQuery, useMutation, ApolloError } from "@apollo/client";
import {
  GET_USER_PRODUCTS_QUERY,
  GET_RENTED_PRODUCTS_QUERY,
  UPDATE_PRODUCT_MUTATION,
  DELETE_PRODUCT_MUTATION,
} from "@/store";
import { Product } from "@/Types";
import { ProductCard } from "@/components/Cards";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
} from "@/components/ui";
import { useNavigate } from "react-router-dom";

export const ProfileDetails = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [updateProduct] = useMutation(UPDATE_PRODUCT_MUTATION);
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION);

  const handleReleaseProduct = async (productId: number) => {
    if (!user?.id) {
      console.error("User not logged in");
      return;
    }

    const variables = {
      id: productId,
      input: {},
      release: true,
    };

    try {
      const result = await updateProduct({
        variables,
        refetchQueries: [
          { query: GET_RENTED_PRODUCTS_QUERY, variables: { userId: user.id } },
          { query: GET_USER_PRODUCTS_QUERY, variables: { userId: user.id } },
        ],
      });
      console.log("Update product result:", result);

      if (result.data?.updateProduct?.error) {
        console.error(
          "Server-side error:",
          result.data.updateProduct.error.message
        );
      } else {
        console.log("Product successfully released");
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        console.error("Error releasing product:", error.message);
        if (error.graphQLErrors) {
          console.error("GraphQL errors:", error.graphQLErrors);
        }
        if (error.networkError) {
          console.error("Network error:", error.networkError);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleDeleteProductFn = async (productId: number) => {
    if (!user?.id) {
      console.error("User not logged in");
      return;
    }

    try {
      const result = await deleteProduct({
        variables: { id: productId },
        refetchQueries: [
          { query: GET_USER_PRODUCTS_QUERY, variables: { userId: user.id } },
        ],
      });

      if (result.data?.deleteProduct) {
        console.log("Product successfully deleted");
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        console.error("Error deleting product:", error.message);
        if (error.graphQLErrors) {
          console.error("GraphQL errors:", error.graphQLErrors);
        }
        if (error.networkError) {
          console.error("Network error:", error.networkError);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const {
    loading: ownedLoading,
    error: ownedError,
    data: ownedData,
  } = useQuery<{
    user: { name: string; email: string; products: Product[] };
  }>(GET_USER_PRODUCTS_QUERY, {
    variables: { userId: user?.id },
    skip: !user?.id,
  });

  const {
    loading: rentedLoading,
    error: rentedError,
    data: rentedData,
  } = useQuery<{
    rentedProducts: Product[];
  }>(GET_RENTED_PRODUCTS_QUERY, {
    variables: { userId: user?.id },
    skip: !user?.id,
  });

  if (ownedLoading || rentedLoading) return <div>Loading...</div>;
  if (ownedError) return <div>Error: {ownedError.message}</div>;
  if (rentedError) return <div>Error: {rentedError.message}</div>;

  const {
    name,
    email,
    products: ownedProducts,
  } = ownedData?.user || {
    name: "",
    email: "",
    products: [],
  };

  const rentedProducts = rentedData?.rentedProducts || [];

  return (
    <div className="container max-w-7xl mx-auto">
      <h1>Profile Details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>

      <Button onClick={() => navigate("/new-product")} className="">
        Create New Product
      </Button>

      <Tabs defaultValue="Owned">
        <TabsList className="my-3">
          <TabsTrigger value="Owned">
            Owned ({ownedProducts?.length})
          </TabsTrigger>
          <TabsTrigger value="Rented">
            Rented ({rentedProducts?.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Owned">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {ownedProducts?.length > 0 ? (
              ownedProducts.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  deleteFn={() => handleDeleteProductFn(Number(product.id))}
                />
              ))
            ) : (
              <p>No owned products found.</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="Rented">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {rentedProducts?.length > 0 ? (
              rentedProducts.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  releaseFn={() => handleReleaseProduct(Number(product.id))}
                />
              ))
            ) : (
              <p>No rented products found.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
