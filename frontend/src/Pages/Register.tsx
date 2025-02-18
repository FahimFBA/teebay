import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Label,
  Input,
} from "@/components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { initialRegisterDataState } from "@/store";
import { IAuthData } from "@/Types";
import { gql, useMutation } from "@apollo/client";

const REGISTER_USER = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      name
    }
  }
`;

export const Register = () => {
  const [data, setData] = useState<IAuthData>(initialRegisterDataState);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    onCompleted: () => {
      navigate("/login");
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await registerUser({
        variables: {
          input: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Register Account</CardTitle>
          <CardDescription>
            Please provide your Name, Email, Password
          </CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Fahim Amin"
                  type="text"
                  name="name"
                  required
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="fahim@domain.com"
                  type="email"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="******"
                  type="password"
                  name="password"
                  required
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
            <div className="text-xs flex">
              <p>Already have an account?</p>
              <Link to="/login" className="underline">
                {" "}
                Login
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
