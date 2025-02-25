import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ProductDetails,
  Products,
  Settings,
  ProfileDetails,
  Login,
  Register,
  NewProduct,
} from "./Pages";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
