import { Outlet, Navigate } from "react-router";
import { useSession } from "../hooks/useAuth";
import { Layout } from "../components/Layout";
import { ProfileProvider } from "@/providers/ProfileProvider";
import { Center, Text } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

export function ProtectedRoutes() {
    const { data: session, isPending: sessionPending } = useSession();

    if (sessionPending) {
        return <LoadingSession />;
    }

    return session ? (
        <ProfileProvider>
            <Layout>
                <Outlet />
            </Layout>
        </ProfileProvider>
    ) : (
        <Navigate to="/login" replace />
    );
}

function LoadingSession() {
    return (
        <Center height="full" flexDirection={"column"} gap={4}>
            <BeatLoader color="white" size={15} />
            <Text>Loading session...</Text>
        </Center>
    );
}
