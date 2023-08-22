import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDetails() {
  const [admin, setAdmin] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axios.get('/api/admins/789') // Replace with the correct admin ID
      .then(response => {
        setAdmin(response.data);
      })
      .catch(error => {
        console.error('Error fetching admin:', error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update admin request and handle response
    axios.put(`/api/admins/${admin.adminId}`, admin)
      .then(response => {
        console.log('Admin updated:', response.data);
        setEditing(false);
      })
      .catch(error => {
        console.error('Admin update error:', error);
      });
  };

  return (
    <div>
      <h2>Admin Details</h2>
      {editing ? (
        <form onSubmit={handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={admin.username || ''}
            onChange={e => setAdmin({ ...admin, username: e.target.value })}
          />
          {/* Other input fields for password, email, etc. */}
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Username: {admin.username}</p>
          {/* Display other admin information */}
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default AdminDetails;
