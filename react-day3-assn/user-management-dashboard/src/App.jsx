import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 flex gap-6">
      {/* User list */}
      <div className="w-1/3 border rounded-lg shadow p-4">
        <h2 className="text-lg font-bold mb-4">All Users</h2>
        <UserList users={users} onSelectUser={setSelectedUserId} />
      </div>

      {/* User details */}
      <div className="w-2/3 border rounded-lg shadow p-4">
        {selectedUserId ? (
          <UserDetails userId={selectedUserId} />
        ) : (
          <p className="text-gray-500">Select a user to view details</p>
        )}
      </div>
    </div>
  );
}

export default App;
