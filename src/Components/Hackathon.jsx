import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Axiosapi = () => {
  const [gitHubUsers, setGitHubUsers] = useState([]);
  const [gitError, setGitError] = useState("");
  const [eDeyLoad, setEDeyLoad] = useState(false);

  useEffect(() => {
    getGitHubUsers();
  }, []);

  const getGitHubUsers = () => {
    setEDeyLoad(true);
    setGitError("");

    axios
      .get("http://49.13.2.10:4000/todos/")
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setGitHubUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log({ error });
        console.log(error.response.status);
        console.log(error.response.data);
        setGitError(error.response.data.message);
      })
      .finally(function () {
        setEDeyLoad(false);
      });
  };

  return (
    <>
      <div>Axios Page: Working with apis (GET Request)</div>
      <button onClick={getGitHubUsers} className="btn bg-red-800">
        Get Users
      </button>

      <div>
        {gitError && (
          <div className="text-red-800 font-bold text-5xl">{gitError}</div>
        )}
        {gitHubUsers.map((user) => (
          <div
            className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
            key={user.id}
          >
            <img className="w-20 h-20 rounded-full" src={user.avatar_url} />
            <div>{user.login}</div>
          </div>
        ))}
        {eDeyLoad && (
          <div className="text-red-800 font-bold text-5xl">Loading...</div>
        )}
      </div>
    </>
  );
};

export default Axiosapi;
