import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_PRODUCT_DETAILS_QUERY,
  CHANGE_PRODUCT_OWNER_MUTATION,
} from "@/store";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

dayjs.extend(advancedFormat);

export const ProductDetails = () => {
  const { id } = useParams();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const { loading, error, data, refetch } = useQuery(
    GET_PRODUCT_DETAILS_QUERY,
    {
      variables: { id: parseInt(id || "0", 10) },
    }
  );

  const { user } = useAuth();

  const [changeProductOwner] = useMutation(CHANGE_PRODUCT_OWNER_MUTATION);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = data?.product;

  if (!product) return <div>Product not found</div>;

  const formatDate = (timestamp: number) => {
    return dayjs(timestamp).format("MMMM Do, YYYY");
  };

  const handlePurchase = async () => {
    try {
      // Assuming the current user's ID is 3 for this example
      // In a real application, you would get this from the authenticated user's context
      const newOwnerId = 3;

      await changeProductOwner({
        variables: {
          id: parseInt(id || "0", 10),
          newOwnerId: newOwnerId,
        },
      });

      // Refetch the product details to update the UI
      await refetch();

      alert("Product purchased successfully!");
    } catch (error) {
      console.error("Error purchasing product:", error);
      alert("Failed to purchase product. Please try again.");
    }
  };

  console.log("product.owner.id", product.owner.id);

  return (
    <div className="container max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>{product.productDescription}</p>
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
          <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogTrigger asChild>
              {user?.id !== product.owner.id && (
                <Button className="mt-4">Purchase Product</Button>
              )}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure that you want to purchase this product?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handlePurchase}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
