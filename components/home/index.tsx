'use client';
import React, {useState, useEffect} from 'react';

interface Data {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

const HomePage = () => {
    const [data, setData] = useState<Data[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const json = await response.json();
          setData(json);
        };
      
        fetchData();
      }, []);

  return (
    <>
    <div>HomePage</div>
    <div>
        {data.map((item, index) => (
            <div key={index}>
                <p>title: {item.title}</p>
                <p>{item.completed ? "completed": "not completed"}</p>
            </div>

        ))}
    </div>
    </>
  )
}

export default HomePage