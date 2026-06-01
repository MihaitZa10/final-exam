"use client"

import { useState } from "react";
import { useCreatePost } from "../hooks/useCreatePost";

export function PostForm()
{
    const [title,setTitle] = useState("");
    const [text,setText] = useState("");

    const createMutation = useCreatePost();

    return(
        <form
            onSubmit={(e) => {
                e.preventDefault();
                createMutation.mutate(
                    title,
                    text,
                    
                );
            }}
            
        >
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"></input>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Text"></textarea>
        
        <button type = "submit"> Submit</button>
        </form>


    )
}