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
} from "@/components/ui";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { initialFiltersState, GET_PRODUCTS_QUERY, RENT_PRODUCT_MUTATION } from "@/store";
import { IFilterState, ProductsData } from "@/Types";
import { filterTypes } from "@/constants";
import { ProductCard } from "@/components/Cards";
import { useAuth } from "@/context/AuthContext";

// Type assertions for UI components
const TypedCommand = Command as React.FC<{ children: React.ReactNode }>;
const TypedCommandInput = CommandInput as React.FC<{ placeholder: string }>;
const TypedCommandList = CommandList as React.FC<{ children: React.ReactNode }>;
const TypedCommandEmpty = CommandEmpty as React.FC<{ children: React.ReactNode }>;
const TypedCommandGroup = CommandGroup as React.FC<{ children: React.ReactNode }>;
const TypedCommandItem = CommandItem as React.FC<{ onSelect: (value: string) => void; children: React.ReactNode }>;

export const Products = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<IFilterState>(initialFiltersState);
  const { user } = useAuth();
  const [rentProduct] = useMutation(RENT_PRODUCT_MUTATION, {
    refetchQueries: [GET_PRODUCTS_QUERY],
  });

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
      }).then(() => {
        // You might want to add some user feedback here, like a toast notification
        console.log("Product rented successfully");
      }).catch((error) => {
        console.error("Error renting product:", error);
        // You might want to show an error message to the user here
      });
    } else {
      console.error("User not logged in");
      // You might want to redirect to login page or show a message to the user
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
          value={filters.condition.minPrice}
          placeholder="min price"
          className="w-[150px]"
          onChange={(e) =>
            setFilters({
              ...filters,
              condition: {
                ...filters.condition,
                minPrice: Number(e.target.value) || 0,
              },
            })
          }
        />
        <Input
          type="number"
          name="maxPrice"
          value={filters.condition.maxPrice}
          placeholder="max price"
          className="w-[150px]"
          onChange={(e) =>
            setFilters({
              ...filters,
              condition: {
                ...filters.condition,
                maxPrice: Number(e.target.value) || 0,
              },
            })
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            rentFn={() => rentAProductFn(product.id)}
          />
        ))}
      </div>
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
