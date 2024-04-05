import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const Trying = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://49.13.2.10:4000/todos/")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <div className="bg-gray-600">
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Desciption: {user.description}</p>
            <p>Completed: {user.completed}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trying;
