import { NavLink } from "react-router";
import { IconMenu, IconX } from "@tabler/icons-react";
import { Menu, Portal, Text } from "@chakra-ui/react";
import { useLogout } from "@/hooks/useAuth";
import { useState } from "react";
import { IconCalendarEvent, IconLogout2 } from "@tabler/icons-react";

const icon = {
    size: 20,
};

export function NavLinks() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
            <Menu.Trigger asChild>
                {isOpen ? (
                    <IconX className="cursor-pointer" />
                ) : (
                    <IconMenu className="cursor-pointer" />
                )}
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="profile">
                            <IconCalendarEvent size={icon.size} />
                            <NavLink to="/profile">
                                <Text fontSize="md">Profile</Text>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Separator />
                        <LogoutButton />
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
}

function LogoutButton() {
    const { mutate: logout, isPending } = useLogout();
    return (
        <Menu.Item
            value="logout"
            onClick={() => logout()}
            disabled={isPending}
            color="red.500"
        >
            <IconLogout2 size={icon.size} />
            <Text fontSize="md">{isPending ? "Logging out..." : "Logout"}</Text>
        </Menu.Item>
    );
}
