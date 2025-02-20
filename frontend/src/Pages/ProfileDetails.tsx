import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@apollo/client";
import { GET_USER_PRODUCTS_QUERY } from "@/store";
import { Product } from "@/Types";
import { ProductCard } from "@/components/Cards";

export const ProfileDetails = () => {
  const { user } = useAuth();
  const { loading, error, data } = useQuery<{
    user: { name: string; email: string; products: Product[] };
  }>(GET_USER_PRODUCTS_QUERY, {
    variables: { userId: user?.id },
    skip: !user?.id,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { name, email, products } = data?.user || {
    name: "",
    email: "",
    products: [],
  };

  return (
    <div className="container max-w-7xl mx-auto">
      <h1>Profile Details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <h2>Your Owned Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {products?.length > 0 ? (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
