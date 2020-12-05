async function Employees() {
  const data = await fetch(
    'https://yalantis-react-school-api.yalantis.com/api/task0/users',
  );

  return (
    <div>
      <h1>test</h1>
      {data}
    </div>
  );
}

export default Employees;
