import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Footer() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Stack paddingX={isMobile ? 4 : 32} paddingY={32}>
            <Text>
                &copy; {new Date().getFullYear()} Mobi Byte. All rights
                reserved.
            </Text>
        </Stack>
    );
}
