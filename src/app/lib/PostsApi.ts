import {NewPost, Post} from "../types/PostTypes"

export async function fetchPosts (): Promise <Post[]> {
    const response = await fetch("/api/posts");
    if (!response.ok) {
        throw new Error ("Failed to fetch Posts!");
    }
    return response.json()
}

export async function createPost(newPost: NewPost): Promise <Post> {
    const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost)
    })

    if(! response.ok) {
        throw new Error ("Failed to createPost");
    }

    return response.json();
}