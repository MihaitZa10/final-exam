export type Post = {
    id: number,
    title: string,
    text: string,
    pinned: boolean
}

export type NewPost = {
    title: string,
    text: string,
    pinned: boolean
}