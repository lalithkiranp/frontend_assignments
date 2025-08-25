import { useEffect, useState } from "react";
import CommentList from "./CommentList";

function PostDetails({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [error, setError] = useState("");

  // Fetch post details
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoadingPost(true);
        setError("");
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingPost(false);
      }
    };
    fetchPost();
  }, [postId]);

  // Fetch comments for the post
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoadingComments(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!res.ok) throw new Error("Failed to fetch comments");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingComments(false);
      }
    };
    fetchComments();
  }, [postId]);

  if (loadingPost) return <p>Loading post...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="mb-4">{post.body}</p>

      <h3 className="text-lg font-semibold mb-2">💬 Comments</h3>
      {loadingComments ? (
        <p>Loading comments...</p>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
}

export default PostDetails;
