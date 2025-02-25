import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { Product } from "@/Types";
import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { CiHeart } from "react-icons/ci";

interface AlertProps {
  title: string;
  description: string;
}

interface ActionButtonProps {
  onClick: () => void;
  children: ReactNode;
  alertProps?: AlertProps;
}

const ActionButton = ({ onClick, children, alertProps }: ActionButtonProps) => {
  if (alertProps) {
    return (
      <AlertDialog>
        <AlertDialogTrigger onClick={(e) => e.stopPropagation()}>
          <Button size="sm">{children}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertProps.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertProps.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Button
      size="sm"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </Button>
  );
};

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

  const { user } = useAuth();
  const ownedByYou = user?.id !== product.owner?.id ? true : false;
  const isNotRented = product.rentedTo == 0 ? true : false;
  console.log("x, y", user?.id.toString(), product.owner.id);
  console.log("product", product.rentedTo);

  return (
    <Card
      onClick={() => navigate("/products/" + product.id)}
      className="hover:shadow-lg"
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.category}</CardDescription>
        </div>
        <Button size="icon" variant="secondary">
          <CiHeart />
        </Button>
      </CardHeader>
      <CardContent>
        {product.price && <p>Price: ${product.price}</p>}
        {product.rent && <p>Rent: ${product.rent}</p>}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2">
          {deleteFn && (
            <ActionButton
              onClick={deleteFn}
              alertProps={{
                title: "Are you sure you want to delete this product?",
                description:
                  "This action cannot be undone. This will permanently delete your product listing and remove your data from our servers.",
              }}
            >
              Delete
            </ActionButton>
          )}
          {editFn && <ActionButton onClick={editFn}>Edit</ActionButton>}
          {buyFn && <ActionButton onClick={buyFn}>Buy</ActionButton>}

          {ownedByYou && isNotRented ? (
            rentFn && <ActionButton onClick={rentFn}>Rent</ActionButton>
          ) : (
            <Button size="sm" variant="secondary" disabled>
              Unavailable
            </Button>
          )}
          {!ownedByYou && (
            <div className="text-muted-secondary text-xs text-blue-400">
              Owned by You
            </div>
          )}
        </div>
        {releaseFn && (
          <ActionButton
            onClick={releaseFn}
            alertProps={{
              title: "Are you sure you want to release this product?",
              description:
                "This action will make the product available for others to rent or buy.",
            }}
          >
            Release
          </ActionButton>
        )}
      </CardFooter>
    </Card>
  );
};
