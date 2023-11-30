import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./layouts/main/pages/home/Home";
import MainLayout from "./layouts/main/MainLayout";
import ProductDetail from "./layouts/main/pages/detail-page/ProductDetail";
import { BasketProvider } from "./contexts/BasketContext";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/Login";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { AuthProvider } from "./contexts/authContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "auth",
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={"login"} />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return (
    <AuthProvider>
      <BasketProvider>
        <RouterProvider router={router} />
      </BasketProvider>
    </AuthProvider>
  );
}

export default App;
