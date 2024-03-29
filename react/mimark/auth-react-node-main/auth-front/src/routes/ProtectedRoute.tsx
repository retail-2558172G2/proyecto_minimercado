import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute() {
  const auth = useAuth();

  return auth.isTokenValid ? <Outlet /> : <Navigate to="/" />;
}
