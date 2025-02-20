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
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { initialFiltersState, GET_PRODUCTS_QUERY } from "@/store";
import { IFilterState, ProductsData } from "@/Types";
import { filterTypes } from "@/constants";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/Cards";

// profile - details,
// Authentication
// ✅ product details page
// list products on profile - edit, delete, create product(owner),
// buy, rent - button,
// debounce

export const Products = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<IFilterState>(initialFiltersState);

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

  return (
    <div className="container max-w-7xl mx-auto my-3">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

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
            {/* @ts-expect-error ...... */}
            <Command>
              {/* @ts-expect-error ...... */}
              <CommandInput placeholder="Search for category" />
              {/* @ts-expect-error ...... */}
              <CommandList>
                {/* @ts-expect-error ...... */}
                <CommandEmpty>No framework found.</CommandEmpty>
                {/* @ts-expect-error ...... */}
                <CommandGroup>
                  {filterTypes.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
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
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
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
          <ProductCard key={product.id} product={product} />
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
