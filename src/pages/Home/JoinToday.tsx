import { Stack, Heading, Button, Text } from "@chakra-ui/react";
import { IconBrandDiscordFilled } from "@tabler/icons-react";

export function JoinToday({ isMobile }: { isMobile: boolean | undefined }) {
    return (
        <Stack
            gap={12}
            px={isMobile ? 4 : 32}
            align="center"
            py={32}
            bgGradient="radial-gradient(ellipse at center, rgba(28, 0, 94, 1), transparent 60%)"
            width={"100%"}
        >
            <Heading
                fontWeight={600}
                fontSize={48}
                className="space-grotesk-500"
                textAlign="center"
            >
                Join Today!
            </Heading>
            <Stack>
                <Text fontSize={24} fontWeight={700}>
                    Become a part of our vibrant community and start your
                    journey!
                </Text>
                <Stack
                    direction={isMobile ? "column" : "row"}
                    gap={4}
                    align={"center"}
                    justifyContent={"space-evenly"}
                >
                    <Button
                        bg="#FF8F2D"
                        alignSelf={isMobile ? "center" : "flex-start"}
                        marginTop={4}
                        shadow={"lg"}
                        color={"white"}
                        fontWeight={700}
                    >
                        Sign Up
                    </Button>
                    <Button
                        bg="#7289da"
                        alignSelf={isMobile ? "center" : "flex-start"}
                        marginTop={4}
                        shadow={"lg"}
                        color={"white"}
                        fontWeight={700}
                    >
                        <IconBrandDiscordFilled />
                        Discord
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}
