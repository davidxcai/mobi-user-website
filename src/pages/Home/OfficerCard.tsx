import { Link, Stack, Image, Text } from "@chakra-ui/react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconWorld,
} from "@tabler/icons-react";

import type { Officer } from "@/types";

export function OfficerCard({ officer }: { officer: Officer }) {
    const { name, role, image, links } = officer;
    const iconSize = 30;
    return (
        <Stack overflow="hidden">
            <Image
                src={image}
                alt={`${name}'s photo`}
                aspectRatio={1}
                height={200}
                objectFit="cover"
                rounded="full"
            />
            <Stack p={4} textAlign={"center"}>
                <Text fontSize="xl" fontWeight={700}>
                    {name}
                </Text>
                <Text>{role}</Text>
            </Stack>
            <Stack direction={"row"} justify="center" p={4} gap={2}>
                {links?.map((link) => {
                    let icon = null;
                    if (link.includes("github")) {
                        icon = <IconBrandGithub size={iconSize} />;
                    } else if (link.includes("linkedin")) {
                        icon = <IconBrandLinkedin size={iconSize} />;
                    } else if (link.includes("instagram")) {
                        icon = <IconBrandInstagram size={iconSize} />;
                    } else {
                        icon = <IconWorld size={iconSize} />;
                    }
                    return (
                        <Link key={link} href={link}>
                            {icon}
                        </Link>
                    );
                })}
            </Stack>
        </Stack>
    );
}
