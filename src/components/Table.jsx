import React, { useState, useEffect } from 'react';

const Table = () => {
    const [users, setUsers] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);

    
    useEffect(() => {
        fetch('https://dummyjson.com/users') 
            .then((response) => response.json())
            .then((data) => {
                console.log(data); 
                setUsers(data.users); 
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ color: 'black', textAlign: 'center', fontSize: '25px' }}>
            Show Status

            <div className="show-table" style={{
                width: '80%',
                maxHeight: '400px',
                margin: '0 auto',
                overflowY: 'auto',
                border: '1px solid black',
            }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                {/* Table for displaying user data */}
                {!loading && !error && (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '100px' }}>First Name</th>
                                <th style={{ width: '100px' }}>Last Name</th>
                                <th style={{ width: '100px' }}>Age</th>
                                <th style={{ width: '150px' }}>Gender</th>
                                <th style={{ width: '200px' }}>Email</th>
                                <th style={{ width: '300px' }}>Phone</th>
                                <th style={{ width: '150px' }}>Username</th>
                                <th style={{ width: '150px' }}>Birthdate</th>
                                <th style={{ width: '100px' }}>Image</th>
                                <th style={{ width: '100px' }}>Blood Group</th>
                                <th style={{ width: '200px' }}>IP Address</th>
                                <th style={{ width: '150px' }}>Address</th>
                                <th style={{ width: '150px' }}>University</th>
                                <th style={{ width: '150px' }}>Company</th>
                                <th style={{ width: '100px' }}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td> 
                                    <td>{user.lastName}</td>
                                    <td>{user.age || 'N/A'}</td> 
                                    <td>{user.gender || 'N/A'}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.username}</td>
                                    <td>{user.birthdate || 'N/A'}</td> 
                                    <td><img src={user.image} alt="user avatar" width="40" height="40" /></td>
                                    <td>{user.bloodGroup || 'N/A'}</td>
                                    <td>{user.ipAddress || 'N/A'}</td> 
                                    <td>{user.address.street}, {user.address.city}</td> 
                                    <td>{user.university || 'N/A'}</td> 
                                    <td>{user.company.name}</td>
                                    <td>{user.role || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Table;
