import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
            .then(response => {
                setData(response.data);
                setStatus(response.status);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Koel App</h1>
            <p>{status}</p>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
}
