function PostCard({ post, onSelectPost }) {
  return (
    <div
      onClick={() => onSelectPost(post.id)}
      className="p-3 border rounded cursor-pointer hover:bg-gray-100"
    >
      <h3 className="font-bold">{post.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{post.body}</p>
    </div>
  );
}

export default PostCard;
