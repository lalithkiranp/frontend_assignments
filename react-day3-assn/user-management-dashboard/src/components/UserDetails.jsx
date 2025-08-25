import { useEffect, useState } from "react";

function UserDetails({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!res.ok) throw new Error("Could not load user details.");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) return <p className="text-center">Loading user details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!user) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p><span className="font-semibold">Email:</span> {user.email}</p>
      <p><span className="font-semibold">Phone:</span> {user.phone}</p>
      <p><span className="font-semibold">Username:</span> {user.username}</p>
      <p><span className="font-semibold">Website:</span> {user.website}</p>
      <p><span className="font-semibold">Company:</span> {user.company?.name}</p>
      <p><span className="font-semibold">Address:</span> {user.address?.city}, {user.address?.street}</p>
    </div>
  );
}

export default UserDetails;
