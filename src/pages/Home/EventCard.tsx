import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import type { Event } from "@/types/";
import { FormatDate } from "@/helpers/format";

export function EventCard({ event }: { event: Event }) {
    const {
        day,
        shortMonth,
        time: startTime,
        weekDay,
    } = FormatDate(new Date(event.starts_at));
    const { time: endTime } = FormatDate(new Date(event.ends_at));
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Stack
            overflow="hidden"
            direction={"row"}
            align={"center"}
            gap={4}
            width={isMobile ? "100%" : 800}
        >
            <Stack gap={0} alignSelf={"center"} flex={1}>
                <Text fontWeight={700} fontSize={24} alignSelf={"center"}>
                    {shortMonth}
                </Text>
                <Text
                    fontWeight={700}
                    fontSize={40}
                    alignSelf={"center"}
                    lineHeight={"auto"}
                >
                    {day}
                </Text>
            </Stack>
            <Stack gap={0} flex={2} alignSelf={"start"}>
                <Text fontWeight={700} fontSize={32}>
                    {event.title}
                </Text>
                <Text fontWeight={500} fontSize="md">
                    {event.location}
                </Text>
            </Stack>
            <Stack flex={1} alignSelf={"start"}>
                <Text fontWeight={500} fontSize="md">
                    {weekDay}
                </Text>
                <Text fontWeight={500} fontSize="md">
                    {startTime} - {endTime}
                </Text>
            </Stack>
        </Stack>
    );
}
