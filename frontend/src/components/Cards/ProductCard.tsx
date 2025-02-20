import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { Product } from "@/Types";

export const ProductCard = ({
  product,
}: {
  product: Product;
  rent?: () => void;
  release?: () => void;
  buy?: () => void;
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
        <p>Price: ${product.price}</p>
        <p>Rent: ${product.rent}</p>
      </CardContent>
    </Card>
  );
};
