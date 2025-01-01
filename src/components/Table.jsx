import React, { useState, useEffect } from 'react';

const Table = ({darkmode,setDarkMode}) => {
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
        <div style={{ color: darkmode ? 'white' : 'black', textAlign: 'center', fontSize: '30px', marginTop:'5px' }}>
            Show Status

            <div className="show-table" style={{
                width: '90%',
                margin: '20px auto',
                overflow:'none',
                overflowY: 'auto',
                
                border: '1px solid #ddd', 
                borderRadius: '8px',
                height:'550px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                
            }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                
                {!loading && !error && (
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontFamily: 'Arial, sans-serif'
                    }}>
                        <thead style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                           
                            fontSize: '16px',
                        }}>
                            <tr>
                                <th style={{width:'100px',height:'20px', padding: '12px 15px', textAlign: 'center' }}>First Name</th>
                                <th style={{width:'100px', padding: '12px 15px', textAlign: 'center' }}>Last Name</th>
                                <th style={{ width:'100px',padding: '12px 15px', textAlign: 'center' }}>Age</th>
                                <th style={{ width:'100px',padding: '12px 15px', textAlign: 'center' }}>Gender</th>
                                <th style={{width:'100px', padding: '12px 150px', textAlign: 'center' }}>Email</th>
                                <th style={{width:'100px', padding: '12px 150px', textAlign: 'center' }}>Phone</th>
                                <th style={{width:'100px', padding: '12px 15px', textAlign: 'center' }}>Username</th>
                                <th style={{width:'100px', padding: '12px 150px', textAlign: 'center' }}>Birthdate</th>
                                <th style={{ width:'100px',padding: '12px 15px', textAlign: 'center' }}>Image</th>
                                <th style={{width:'100px', padding: '12px 150px', textAlign: 'center' }}>Blood Group</th>
                                <th style={{ width:'100px',padding: '12px 15px', textAlign: 'center' }}>IP Address</th>
                                <th style={{ width:'100px',padding: '12px 150px', textAlign: 'center' }}>Address</th>
                                <th style={{ width:'100px',padding: '12px 150px', textAlign: 'center' }}>University</th>
                                <th style={{ width:'100px',padding: '12px 150px', textAlign: 'center' }}>Company</th>
                                <th style={{width:'100px', padding: '12px 15px', textAlign: 'center' }}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} style={{
                                    backgroundColor: user.id % 2 === 0 ? '#f9f9f9' : 'white',
                                    transition: 'background-color 0.3s ease',
                                    color:'black'
                                }}>
                                    <td style={{  textAlign: 'center' }}>{user.firstName}</td>
                                    <td style={{ textAlign: 'center' }}>{user.lastName}</td>
                                    <td style={{ textAlign: 'center' }}>{user.age || 'N/A'}</td>
                                    <td style={{textAlign: 'center' }}>{user.gender || 'N/A'}</td>
                                    <td style={{textAlign: 'center' }}>{user.email}</td>
                                    <td style={{ textAlign: 'center' }}>{user.phone||'NA'}</td>
                                    <td style={{ textAlign: 'center' }}>{user.username}</td>
                                    <td style={{ textAlign: 'center' }}>{user.birthdate || 'N/A'}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <img src={user.image} alt="user avatar" width="40" height="40" />
                                    </td>
                                    <td style={{ textAlign: 'center' }}>{user.bloodGroup || 'N/A'}</td>
                                    <td style={{ width:'100px',padding: '12px 15px', textAlign: 'center' }}>{user.ip || 'N/A'}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        {user.address.street} {user.address.city}
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        {user.university || 'N/A'}
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        {user.company.name}
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        {user.role || 'N/A'}
                                    </td>
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
