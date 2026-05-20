import { useEffect, useState } from "react";
import Suggestions from "./suggest";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value;
    setSearchParams(query);
    if (query.length > 1) {
      const filterData = users?.length
        ? users.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase()),
          )
        : [];
      setFilterUsers(filterData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event) {
    setShowDropDown(false);
    setSearchParams(event.target.innerText);
    setFilterUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (error) {
    return <h1>Error Occurred! {error.message}</h1>;
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data !</h1>
      ) : (
        <input
          value={searchParams}
          type="text"
          name="search-user"
          placeholder="Search Users here.."
          onChange={handleChange}
        />
      )}

      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filterUsers} />
      )}
    </div>
  );
}
