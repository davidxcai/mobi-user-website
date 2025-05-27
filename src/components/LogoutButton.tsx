import { useLogout } from "../hooks/useAuth";

export function LogoutButton() {
  const { mutate: logout, isPending: logoutPending } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="cursor-pointer"
      disabled={logoutPending}
    >
      {logoutPending ? "Logging out..." : "Logout"}
    </button>
  );
}
