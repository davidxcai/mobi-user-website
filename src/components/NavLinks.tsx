import { NavLink } from "react-router";
import { useSession } from "../hooks/useAuth";
import { LogoutButton } from "./LogoutButton";

export function NavLinks() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <NavLink to="/dashboard" className="p-2">
            Dashboard
          </NavLink>
          <NavLink to="/profile" className="p-2">
            Profile
          </NavLink>
          <LogoutButton />
        </>
      ) : (
        <>
          <NavLink to="/login" className="p-2">
            Login
          </NavLink>
          <NavLink to="/register" className="p-2">
            Register
          </NavLink>
        </>
      )}
    </div>
  );
}
