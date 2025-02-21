import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
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
  editFn?: () => void;
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
            <Button
              size={"sm"}
              onClick={(e) => {
                e.stopPropagation();
                deleteFn();
              }}
            >
              deleteFn
            </Button>
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
