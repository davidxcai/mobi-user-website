import { Outlet, Navigate } from "react-router";
import { useSession } from "../hooks/useAuth";

export function ProtectedRoutes() {
  const { data: session, isPending: sessionPending } = useSession();

  if (sessionPending) {
    return <div>Loading...</div>;
  }

  return session ? <Outlet /> : <Navigate to="/login" replace />;
}
