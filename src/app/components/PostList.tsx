"use client"
import { UsePosts } from "../hooks/usePosts"; 
import { Post } from "../types/PostTypes";

export function PostList(posts : {post : Post[]}) {
      return (
            <ul>
                {posts.map(post => (
                <li key={post.id}>{post.title}</li>
                <li key={post.id}>{post.text}</li>
            ))}
            </ul>
  );

}