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
import { LoginDataType } from "@/Types";
import { initialLoginDataState, LOGIN_MUTATION_QUERY } from "@/store";
import { useMutation } from "@apollo/client";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const [data, setData] = useState<LoginDataType>(initialLoginDataState);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION_QUERY, {
    onCompleted: (data) => {
      authLogin(data.login.token, data.login.user);
      navigate("/");
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await loginMutation({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
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
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="john@domain.com"
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
              {loading ? "Logging in..." : "Login"}
            </Button>
            <div className="text-xs flex">
              <p>Don't have an account? </p>
              <Link to="/register" className="underline">
                {" "}
                Register
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
