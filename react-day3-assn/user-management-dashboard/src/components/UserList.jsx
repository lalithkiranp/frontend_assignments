import UserCard from "./UserCard";

function UserList({ users, onSelectUser }) {
  return (
    <div className="flex flex-col gap-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelectUser={onSelectUser} />
      ))}
    </div>
  );
}

export default UserList;
