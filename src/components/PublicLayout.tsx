import { Container, Heading, Stack, Text } from "@chakra-ui/react";

export function PublicLayout({ children }: { children?: React.ReactNode }) {
    return (
        <Container height="full" mt="8">
            <Stack align="center">
                <Heading>MOBI</Heading>
                <Text>Discover the magic of making apps!</Text>
                {children}
            </Stack>
        </Container>
    );
}
