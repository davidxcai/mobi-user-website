import { NavLinks } from "./NavLinks";
import { Container, Text } from "@chakra-ui/react";
import { ThemeButton } from "@/components/ThemeButton";

export function Navbar() {
    return (
        <Container
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="4"
        >
            <NavLinks />
            <Text className="space-grotesk-500" fontWeight="bold" fontSize="xl">
                MOBI
            </Text>

            <ThemeButton />
        </Container>
    );
}
