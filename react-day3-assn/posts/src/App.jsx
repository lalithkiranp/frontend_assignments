import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6 flex gap-6">
      {/* Left side: Post List */}
      <div className="w-1/2 border rounded-lg shadow p-4">
        <h2 className="text-lg font-bold mb-4">📜 Blog Posts</h2>
        {loading && <p>Loading posts...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <PostList posts={posts} onSelectPost={setSelectedPostId} />
      </div>

      {/* Right side: Post Details */}
      <div className="w-1/2 border rounded-lg shadow p-4">
        {selectedPostId ? (
          <PostDetails postId={selectedPostId} />
        ) : (
          <p className="text-gray-500">Select a post to read and view comments</p>
        )}
      </div>
    </div>
  );
}

export default App;
