import {prisma} from "./db"

export async function getAllPosts() {
    return await prisma.post.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
}
export async function createPost(title: string, text: string, pinned: boolean) {
    return await prisma.post.create({
        data: {
            title,
            text,
            pinned
        }
    })
}