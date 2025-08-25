function CommentCard({ comment }) {
  return (
    <div className="p-3 border rounded bg-gray-50">
      <h4 className="font-semibold">{comment.name}</h4>
      <p className="text-sm text-gray-600">{comment.email}</p>
      <p className="mt-2">{comment.body}</p>
    </div>
  );
}

export default CommentCard;
