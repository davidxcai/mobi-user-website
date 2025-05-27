import { supabase } from "./supabaseClient";
import { useQuery } from "@tanstack/react-query";
import type { Event } from "../types";

export function useGetCurrentSemesterEvents() {
    const today = new Date();

    return useQuery<Event[], Error>({
        queryKey: ["events"],
        queryFn: async () => {
            console.log("today:", today.toISOString());
            const { data, error } = await supabase
                .from("events")
                .select("*, profiles (*)")
                .gte("ends_at", today.toISOString());
            if (error) {
                throw new Error(error.message);
            }
            const events = data.map((event) => {
                return {
                    ...event,
                    created_at: new Date(event.created_at),
                    starts_at: new Date(event.starts_at),
                    ends_at: new Date(event.ends_at),
                };
            });
            console.log("Fetched events:", events);
            return (events as Event[]) || [];
        },
        refetchOnWindowFocus: false,
        gcTime: 1000 * 60 * 60, // 1 hour
    });
}
