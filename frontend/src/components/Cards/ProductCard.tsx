import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { Product } from "@/Types";

export const ProductCard = ({
  product,
  buyFn,
  releaseFn,
  rentFn,
  deleteFn,
  editFn,
}: {
  product: Product;
  rentFn?: () => void;
  releaseFn?: () => void;
  buyFn?: () => void;
  deleteFn?: () => void;
  editFn?: () => Promise<void>;
}) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/products/" + product.id)}
      className="hover:shadow-lg"
    >
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        {product.price && <p>Price: ${product.price}</p>}
        {product.rent && <p>Rent: ${product.rent}</p>}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          {deleteFn && (
            <AlertDialog>
              <AlertDialogTrigger onClick={(e) => e.stopPropagation()}>
                <Button size="sm">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to delete this product?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your product listing and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteFn();
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {editFn && (
            <Button
              size={"sm"}
              onClick={(e) => {
                e.stopPropagation();
                editFn();
              }}
            >
              editFn
            </Button>
          )}

          {buyFn && (
            <Button
              size={"sm"}
              onClick={(e) => {
                e.stopPropagation();
                buyFn();
              }}
            >
              Buy
            </Button>
          )}
          {rentFn && (
            <Button
              size={"sm"}
              onClick={(e) => {
                e.stopPropagation();
                rentFn();
              }}
            >
              Rent
            </Button>
          )}
        </div>
        {releaseFn && (
          <Button
            size={"sm"}
            onClick={(e) => {
              e.stopPropagation();
              releaseFn();
            }}
          >
            Release
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
