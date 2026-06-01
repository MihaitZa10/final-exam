import { PostForm } from "../components/PostForm";
import { UsePosts } from "../hooks/usePosts";
import { PostList } from "../components/PostList";


export default function Home() {
  const { data, error, isLoading } = UsePosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1>List of Posts</h1>
          <PostForm/>
          <PostList post = {data ?? []}/>
      </main>
 
  );
}
