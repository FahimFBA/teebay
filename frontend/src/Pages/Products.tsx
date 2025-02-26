import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent
} from "@/components/ui";
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import {
  initialFiltersState,
  GET_PRODUCTS_QUERY,
  RENT_PRODUCT_MUTATION,
  UPDATE_PRODUCT_MUTATION,
  CHANGE_PRODUCT_OWNER_MUTATION,
} from "@/store";
import { IFilterState, ProductsData, Product } from "@/Types";
import { filterTypes } from "@/constants";
import { ProductCard } from "@/components/Cards";
import { useAuth } from "@/context/AuthContext";

// Type assertions for UI components
const TypedCommand = Command as React.FC<{ children: React.ReactNode }>;
const TypedCommandInput = CommandInput as React.FC<{ placeholder: string }>;
const TypedCommandList = CommandList as React.FC<{ children: React.ReactNode }>;
const TypedCommandEmpty = CommandEmpty as React.FC<{
  children: React.ReactNode;
}>;
const TypedCommandGroup = CommandGroup as React.FC<{
  children: React.ReactNode;
}>;
const TypedCommandItem = CommandItem as React.FC<{
  onSelect: (value: string) => void;
  children: React.ReactNode;
}>;

export const Products = () => {
  const navigate = useNavigate();
  const [debounce1, setDebounce1] = useState<number>(0);
  const [debounce2, setDebounce2] = useState<number>(0);

  const [filters, setFilters] = useState<IFilterState>(initialFiltersState);
  const { user } = useAuth();
  const [rentProduct] = useMutation(RENT_PRODUCT_MUTATION, {
    refetchQueries: [GET_PRODUCTS_QUERY],
  });
  const [updateProduct] = useMutation(UPDATE_PRODUCT_MUTATION, {
    refetchQueries: [GET_PRODUCTS_QUERY],
  });
  const [changeProductOwner] = useMutation(CHANGE_PRODUCT_OWNER_MUTATION, {
    refetchQueries: [GET_PRODUCTS_QUERY],
  });

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        condition: {
          ...prevFilters.condition,
          minPrice: debounce1 || 0,
        },
      }));
    }, 2200);

    return () => clearTimeout(timer);
  }, [debounce1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        condition: {
          ...prevFilters.condition,
          maxPrice: debounce2 || 0,
        },
      }));
    }, 2200);

    return () => clearTimeout(timer);
  }, [debounce2]);

  const { loading, error, data } = useQuery<ProductsData>(GET_PRODUCTS_QUERY, {
    variables: {
      ...filters,
      filters: {
        ...filters.condition,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data?.products.products || [];
  const totalCount = data?.products.totalCount || 0;
  const hasNextPage = data?.products.hasNextPage || false;

  const rentAProductFn = (productId: number) => {
    if (user) {
      rentProduct({
        variables: {
          id: productId,
          rentedTo: user.id,
        },
      })
        .then(() => {
          console.log("Product rented successfully");
        })
        .catch((error) => {
          console.error("Error renting product:", error);
        });
    } else {
      console.error("User not logged in");
    }
  };

  const buyProductFn = (productId: number) => {
    if (user) {
      changeProductOwner({
        variables: {
          id: productId,
          newOwnerId: user.id,
        },
      })
        .then(() => {
          console.log("Product purchased successfully");
        })
        .catch((error) => {
          console.error("Error purchasing product:", error);
        });
    } else {
      console.error("User not logged in");
    }
  };

  const handleEditProduct = async (product: Product) => {
    setEditingProduct({
      ...product,
      price: product.price || 0,
      rent: product.rent || 0,
    });
    setIsEditModalOpen(true);
    return Promise.resolve();
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      const variables = {
        id: Number(editingProduct.id),
        input: {
          name: editingProduct.name,
          category: editingProduct.category,
          price: Number(editingProduct.price),
          rent: Number(editingProduct.rent),
        },
      };
      console.log(
        "Updating product with variables:",
        JSON.stringify(variables, null, 2)
      );
      updateProduct({
        variables: variables,
      })
        .then((response) => {
          console.log(
            "Update product response:",
            JSON.stringify(response, null, 2)
          );
          console.log("Product updated successfully");
          setIsEditModalOpen(false);
          setEditingProduct(null);
        })
        .catch((error) => {
          console.error("Error updating product:", error);
          if (error.graphQLErrors) {
            error.graphQLErrors.forEach(
              (graphQLError: {
                message: string;
                extensions?: Record<string, unknown>;
              }) => {
                console.error("GraphQL error:", graphQLError.message);
                if (graphQLError.extensions) {
                  console.error(
                    "Error extensions:",
                    JSON.stringify(graphQLError.extensions, null, 2)
                  );
                }
              }
            );
          }
          if (error.networkError) {
            console.error("Network error:", error.networkError);
            if (error.networkError.result) {
              console.error(
                "Network error result:",
                JSON.stringify(error.networkError.result, null, 2)
              );
            }
          }
        });
    }
  };

  return (
    <div className="container max-w-7xl mx-auto my-3">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button onClick={() => navigate("/new-product")}>
          <Plus className="mr-2 h-4 w-4" /> Create New Product
        </Button>
      </div>

      <div className="flex flex-row gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-[200px] justify-between mb-4"
            >
              {filters.condition.category
                ? filterTypes.find(
                    (item) => item.value === filters.condition.category
                  )?.label
                : "Select Category..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <TypedCommand>
              <TypedCommandInput placeholder="Search for category" />
              <TypedCommandList>
                <TypedCommandEmpty>No framework found.</TypedCommandEmpty>
                <TypedCommandGroup>
                  {filterTypes.map((item) => (
                    <TypedCommandItem
                      key={item.value}
                      onSelect={(currentValue: string) => {
                        setFilters({
                          ...filters,
                          condition: {
                            ...filters.condition,
                            category:
                              currentValue === filters.condition.category
                                ? ""
                                : currentValue,
                          },
                        });
                      }}
                    >
                      {item.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          filters.condition.category === item.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </TypedCommandItem>
                  ))}
                </TypedCommandGroup>
              </TypedCommandList>
            </TypedCommand>
          </PopoverContent>
        </Popover>

        <Input
          type="number"
          name="minPrice"
          value={debounce1}
          placeholder="min price"
          className="w-[150px]"
          onChange={(e) => setDebounce1(+e.target.value)}
        />
        <Input
          type="number"
          name="maxPrice"
          value={debounce2}
          placeholder="max price"
          className="w-[150px]"
          onChange={(e) => setDebounce2(+e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            rentFn={() => rentAProductFn(Number(product.id))}
            buyFn={() => buyProductFn(Number(product.id))}
            editFn={() => handleEditProduct(product)}
          />
        ))}
      </div>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Make changes to your product here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {editingProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={editingProduct.name || ""}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      name: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <div className="col-span-3">
                  <Select
                    value={editingProduct.category || ""}
                    onValueChange={(value) =>
                      setEditingProduct({ ...editingProduct, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {filterTypes.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  id="price"
                  type="number"
                  value={editingProduct.price || 0}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      price: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rent" className="text-right">
                  Rent
                </Label>
                <Input
                  id="rent"
                  type="number"
                  value={editingProduct.rent || 0}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      rent: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit" onClick={handleUpdateProduct}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="my-4 flex justify-between items-center">
        <p>
          Showing {(filters.page - 1) * filters.pageSize + 1} -{" "}
          {Math.min(filters.page * filters.pageSize, totalCount)} of{" "}
          {totalCount} products
        </p>
        <div>
          <Button
            onClick={() =>
              setFilters({
                ...filters,
                page: filters.page - 1,
              })
            }
            disabled={filters.page === 1}
            className="mr-2"
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setFilters({
                ...filters,
                page: filters.page + 1,
              })
            }
            disabled={!hasNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
