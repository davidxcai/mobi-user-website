import { useLogout, useSession } from "../hooks/useAuth";
import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router";

export function AuthButtons() {
    const { mutate: logout, isPending } = useLogout();
    const { data: session } = useSession();

    console.log("Logout", session);

    return (
        <>
            {session ? (
                <>
                    <NavLink to="/profile">Profile</NavLink>
                    <Text onClick={() => logout()}>
                        {isPending ? "Logging out..." : "Logout"}
                    </Text>
                </>
            ) : (
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </>
            )}
        </>
    );
}
