import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_PRODUCT_MUTATION } from "../store/graph-ql-queries";
import { useAuth } from "../context/AuthContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  Input,
  Label,
} from "@/components/ui";
import { filterTypes } from "@/constants";

interface FormData {
  name: string;
  category: string;
  price: string;
  rent: string;
}

interface FormErrors {
  name?: string;
  category?: string;
  price?: string;
  rent?: string;
  submit?: string;
}

export const NewProduct: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
const [formData, setFormData] = useState<FormData>({
    name: "",
    category: "",
    price: "",
    rent: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT_MUTATION, {
    onCompleted: (data) => {
      navigate(`/products/${data.createProduct.id}`);
    },
    onError: (error) => {
      console.error("Error creating product:", error);
      setErrors({ submit: "Failed to create product. Please try again." });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, category: value });
    setErrors({ ...errors, category: undefined });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.price.trim()) newErrors.price = "Price is required";
    if (isNaN(parseFloat(formData.price)))
      newErrors.price = "Price must be a number";
    if (formData.rent.trim() && isNaN(parseFloat(formData.rent)))
      newErrors.rent = "Rent must be a number if provided";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      setErrors({ submit: "You must be logged in to create a product." });
      return;
    }
    if (validateForm()) {
      try {
        await createProduct({
          variables: {
            input: {
              name: formData.name,
              category: formData.category,
              price: parseFloat(formData.price),
              rent: formData.rent ? parseFloat(formData.rent) : null,
              ownerId: user.id,
            },
          },
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-8">
        <p className="text-red-500">
          You must be logged in to create a product.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={handleSelectChange} value={formData.category}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {filterTypes.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleInputChange}
            className={errors.price ? "border-red-500" : ""}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="rent">Rent</Label>
          <Input
            id="rent"
            name="rent"
            type="number"
            step="0.01"
            value={formData.rent}
            onChange={handleInputChange}
            className={errors.rent ? "border-red-500" : ""}
          />
          {errors.rent && <p className="text-red-500 text-sm">{errors.rent}</p>}
        </div>
        {errors.submit && (
          <p className="text-red-500 text-sm mb-4">{errors.submit}</p>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Product"}
        </Button>
      </form>
    </div>
  );
};
