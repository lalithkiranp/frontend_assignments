import CommentCard from "./CommentCard";

function CommentList({ comments }) {
  return (
    <div className="flex flex-col gap-3">
      {comments.map((c) => (
        <CommentCard key={c.id} comment={c} />
      ))}
    </div>
  );
}

export default CommentList;
