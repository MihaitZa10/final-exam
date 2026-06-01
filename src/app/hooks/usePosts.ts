import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../lib/PostsApi";
export function UsePosts() {
    return useQuery ({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })
}