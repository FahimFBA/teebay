import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@apollo/client";
import { GET_USER_PRODUCTS_QUERY, GET_RENTED_PRODUCTS_QUERY } from "@/store";
import { Product } from "@/Types";
import { ProductCard } from "@/components/Cards";

export const ProfileDetails = () => {
  const { user } = useAuth();
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
      <h2>Your Owned Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {ownedProducts?.length > 0 ? (
          ownedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No owned products found.</p>
        )}
      </div>
      <h2>Products You're Renting</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {rentedProducts?.length > 0 ? (
          rentedProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              releaseFn={() => console.log("released")}
            />
          ))
        ) : (
          <p>No rented products found.</p>
        )}
      </div>
    </div>
  );
};
