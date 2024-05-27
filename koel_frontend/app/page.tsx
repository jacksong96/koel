"use client"
import React, { useEffect, useState } from 'react';
import { fetchAnimals, fetchUsers } from './lib/dataFetching';
import Image from 'next/image';
import axios from 'axios';
import Leaderboard from './Leaderboard';

const initialLeaderboard = [
  { username: 'Jackson', identified_animals_count: 10 },
  { username: 'Ervin', identified_animals_count: 50 },
  { username: 'Cholo', identified_animals_count: 60 },
  { username: 'Zul', identified_animals_count: 22 },
  { username: 'Indr', identified_animals_count: 15 },
  { username: 'Rit', identified_animals_count: 28 },
  // Add more users as needed
];

const HomePage: React.FC = () => {
  const [animals, setAnimals] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    setLoading(true);
    const fetchedAnimals = await fetchAnimals();
    const fetchedUsers = await fetchUsers();
    setAnimals(fetchedAnimals);
    setUsers(fetchedUsers);
    setLoading(false);
    };


    
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [fetchedImg, setFetchedImg] = useState(null);

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      setUploading(true);
      const response = await fetch('http://127.0.0.1:8000/api/predict', {
            method: 'POST',
            body: formData,
      });
  
      const data = await response.json();
      console.log('response data:', data);
      
      return data;

    } catch (error) {
      console.error('Error detecting:', error);
      return []

    } finally {
      setUploading(false);
    }
  };  

  return (
    <body>
      <header>
          Koel
      </header>
      <h1>Welcome to the Main Page</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Fetching Data...' : 'Fetch Data'}
      </button>
      <React.StrictMode>
        <Leaderboard initialLeaderboard={initialLeaderboard} />
      </React.StrictMode>
      <h2>Animals:</h2>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>{animal.species_name}</li>
        ))}
      </ul>
      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Detecting...' : 'Detect'}
      </button>
    </div>
    </body>
  );
};

export default HomePage;