import React, { useState, useEffect } from 'react';

function Employees() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    );
  }
}

export default Employees;
