import React, { useState, useEffect } from 'react';

function Employees() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [employees, setEmployees] = useState([]);
  // const [Checked, setChecked] = useState({
  //   isChecked: false,
  // });
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setEmployees(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  // sorted array
  let sortedArray = [];
  employees.forEach((item) => {
    sortedArray.push(item);
  });

  function compare(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  }
  sortedArray.sort(compare);

  // insert by lastName by alphabet
  function filterItems(arr, char) {
    return arr.filter(function (el) {
      return el.lastName[0] === char;
    });
  }

  const render = alphabet.map((item, index) => {
    return (
      <div>
        <h3 key={index}>{item}</h3>
        <ul>
          {filterItems(sortedArray, item).map((employee) => (
            <li key={employee.id}>
              <input type="checkbox" />
              {employee.lastName} {employee.firstName}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h3>Employees</h3>
        <div className="alphabet">{render}</div>
      </div>
    );
  }
}
export default Employees;

/*
                <ul>
                  {sortedArray.map((employee) => (
                    <li key={employee.id}>
                      <input type="checkbox" />
                      {employee.lastName} {employee.firstName}
                    </li>
                  ))}
                </ul>

        <div className="alphabet">
          {alphabet.map((item, index, string) => {
            return (
              <div>
                <h3 key={index}>{item}</h3>
              </div>
            );
          })}
        </div>

   <h3 key={index}>{item}</h3>
    <ul>
      <li key={employees.id}>{employees[91].lastName}</li>
    </ul>



<ul>
{employees.map((employee) => (
  <li key={employee.id}>
    <input type="checkbox" />
    {employee.lastName} {employee.firstName}
  </li>
))}
</ul>

<ul>
<li key={employees.id}>{employees[0].lastName}</li>
</ul>

onChange={(e) => {
  setChecked(e.target.checked);
  console.log(e.target.checked);
}}
*/
