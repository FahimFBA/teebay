import { useAuth } from "@/context/AuthContext";

export const ProfileDetails = () => {
  const { user } = useAuth();
  console.log("useAuth", user);
  return <div>ProfileDetails</div>;
};
