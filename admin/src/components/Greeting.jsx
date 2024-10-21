import React, { useState, useEffect } from 'react';
import { backendUrl } from '../App';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const [adminName, setAdminName] = useState('Admin');

  // Get the current time to adjust greeting dynamically
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  useEffect(() => {
    const fetchAdminName = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/admin-name'); // Assuming backend is running on the same origin
        setAdminName(response.data.adminName);
      } catch (error) {
        console.log('Error fetching admin name:', error);
      }
    };

    fetchAdminName();
    setGreeting(getGreeting());
  }, []);


  return (
    <div className="dashboard">
      <h1>{greeting}, {adminName}!</h1>
      {/* The rest of your dashboard content */}
    </div>
  );
};

export default Greeting;
