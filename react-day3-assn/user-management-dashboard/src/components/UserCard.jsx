function UserCard({ user, onSelectUser }) {
  return (
    <div
      onClick={() => onSelectUser(user.id)}
      className="p-3 border rounded cursor-pointer hover:bg-gray-100"
    >
      <h3 className="font-bold">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">{user.phone}</p>
    </div>
  );
}

export default UserCard;
