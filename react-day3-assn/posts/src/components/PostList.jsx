import PostCard from "./PostCard";

function PostList({ posts, onSelectPost }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onSelectPost={onSelectPost} />
      ))}
    </div>
  );
}

export default PostList;
