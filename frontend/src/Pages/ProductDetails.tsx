import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAILS_QUERY } from "@/store";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const ProductDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS_QUERY, {
    variables: { id: parseInt(id || "0", 10) },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = data?.product;

  if (!product) return <div>Product not found</div>;

  const formatDate = (timestamp: number) => {
    return dayjs(timestamp).format("MMMM Do, YYYY");
  };

  return (
    <div className="container max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Rent:</strong> ${product.rent}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {formatDate(parseInt(product.createdAt))}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {formatDate(parseInt(product.updatedAt))}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Owner Details</h2>
          <p>
            <strong>Name:</strong> {product.owner.name}
          </p>
          <p>
            <strong>Email:</strong> {product.owner.email}
          </p>
        </div>
      </div>
    </div>
  );
};
