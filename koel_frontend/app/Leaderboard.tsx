import './Leaderboard.css'; // Import the CSS file

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  username: string;
  identified_animals_count: number;
}

// const Leaderboard: React.FC = () => {
//   const [leaderboard, setLeaderboard] = useState<User[]>([]);

//   useEffect(() => {
//     axios.get<User[]>('your-api-endpoint/leaderboard')
//       .then(response => {
//         setLeaderboard(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the leaderboard data!', error);
//       });
//   }, []);

//   return (
//     <div className="content">
//         <div className="filter-buttons">
//           <button onClick={() => filterResults('1-week')}>1 Week</button>
//           <button onClick={() => filterResults('1-month')}>1 Month</button>
//           <button onClick={() => filterResults('all-time')}>All Time</button>
//         </div>
//         <div>
//           <h1>Leaderboard</h1>
//           <table>
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Identified Animals</th>
//               </tr>
//             </thead>
//             <tbody id="leaderboard-body">
//               {leaderboard.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.username}</td>
//                   <td>{user.identified_animals_count}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//   );
// };
const Leaderboard: React.FC<LeaderboardProps> = ({ initialLeaderboard }) => {
  const [leaderboard, setLeaderboard] = useState<User[]>(initialLeaderboard);

  const filterResults = (timeframe: string) => {
    // Replace this with actual filtering logic
    console.log(`Filter results by: ${timeframe}`);
    // Example logic for filtering leaderboard data
    // setLeaderboard(filteredData);
  };

  return (
    <>
      <header>
        koel
      </header>
      <div className="content">
        <div className="filter-buttons">
          <button onClick={() => filterResults('1-week')}>1 Week</button>
          <button onClick={() => filterResults('1-month')}>1 Month</button>
          <button onClick={() => filterResults('all-time')}>All Time</button>
        </div>
        <div>
          <h1>Leaderboard</h1>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Identified Animals</th>
              </tr>
            </thead>
            <tbody id="leaderboard-body">
              {leaderboard.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.identified_animals_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
