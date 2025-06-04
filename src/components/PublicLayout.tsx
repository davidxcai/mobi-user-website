import { Container, Stack } from "@chakra-ui/react";
import { MobiOutlineLogo } from "@/assets/OutlineLogo";

export function PublicLayout({ children }: { children?: React.ReactNode }) {
    return (
        <Container height="full" mt="8">
            <Stack align="center" justify="center" height="full" gap="8">
                <MobiOutlineLogo />
                {children}
            </Stack>
        </Container>
    );
}
