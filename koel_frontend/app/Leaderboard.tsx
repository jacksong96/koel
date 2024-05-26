import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  username: string;
  identified_animals_count: number;
}

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('your-api-endpoint/leaderboard')
      .then(response => {
        setLeaderboard(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the leaderboard data!', error);
      });
  }, []);

  return (
    <div>
      {/* <h1>Leaderboard</h1> */}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Identified Animals</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.identified_animals_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
