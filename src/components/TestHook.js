import React, { useState, useEffect } from 'react';

function TestHook() {
  const [item, setItems] = useState([]);

  // local storage
  useEffect(() => {
    const data = localStorage.getItem('items');
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(item));
  });

  // add new item
  function myChangeHandler(event) {
    event.preventDefault();
    let name = event.target.name;
    let val = event.target.checked;
    if (val === true) {
      const newItems = [...item, { name, val }];
      setItems(newItems);
      console.log(item[0]);
    } else {
      removeItem();
    }
  }

  // remove item
  const removeItem = () => {
    const newItems = [...item];
    newItems.splice(-1, 1);
    setItems(newItems);
  };

  // alphabet
  const alphabet = ['a', 'b', 'c'];

  // checkbox
  console.log(2, item);
  return (
    <div>
      <ul>
        {alphabet.map((elem, index) => {
          return (
            <li key={index}>
              <input name={elem} type="checkbox" onChange={myChangeHandler} />
              {elem}
            </li>
          );
        })}
      </ul>
      <h1>test hook</h1>
      <ul>
        {item.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default TestHook;
