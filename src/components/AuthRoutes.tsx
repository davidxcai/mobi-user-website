import { Navigate, Outlet } from "react-router";
import { useSession } from "../hooks/useAuth";

export function AuthRoutes() {
  const { data: session, isPending: sessionPending } = useSession();
  if (sessionPending) {
    return <div>Loading...</div>;
  }

  return session ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
