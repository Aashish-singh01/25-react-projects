import { useEffect, useState } from "react";
import User from "./user";
import './App.css'

export default function githubProfileFinder() {
  const [userName, setuserName] = useState("Aashish-singh01");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGithubUserData();
  }
  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setuserName("");
    } else {
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loding Data please wait..</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setuserName(event.target.value)}
        />
        <button onClick={handleSubmit}>search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
