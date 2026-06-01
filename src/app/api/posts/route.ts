import { getAllPosts, createPost } from "../../server/posts";

export async function GET () {
    const data = await getAllPosts();
    return Response.json(data);
}

export async function POST (request: Request) {
    const body = await request.json()
    const data = await createPost(
        body.title,
        body.text,
        body.pinned
    )
    return Response.json(data, {
        status : 201
    });
}