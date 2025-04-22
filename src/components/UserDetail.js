import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetail();
  }, [id]);

  if (loading) return <div>Loading user details...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="user-detail">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Address:</h3>
      <p>{user.address.street}, {user.address.city}</p>
      <h3>Company:</h3>
      <p>{user.company.name}</p>
    </div>
  );
}

export default UserDetail;

