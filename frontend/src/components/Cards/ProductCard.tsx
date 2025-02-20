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
}: {
  product: Product;
  rentFn?: () => void;
  releaseFn?: () => void;
  buyFn?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/products/" + product.id)}
      className="cursor-pointer hover:shadow-lg"
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
          {buyFn && <Button size={"sm"}>Buy</Button>}
          {rentFn && <Button size={"sm"}>Rent</Button>}
        </div>
        {releaseFn && <Button size={"sm"}>Release</Button>}
      </CardFooter>
    </Card>
  );
};
