import { Navbar } from "./Navbar";
import { Container, Stack } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Stack height="100vh">
            <Navbar />
            <Container flex="1" overflow="hidden">
                <Stack
                    gap="8"
                    height="full"
                    align="center"
                    minH="100dvh"
                    justifyContent={"center"}
                >
                    {children}
                </Stack>
            </Container>
        </Stack>
    );
}
