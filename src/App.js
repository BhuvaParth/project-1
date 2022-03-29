import logo from './logo.svg';
import './App.css';

function App() {
  let data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];

  let filterData = data.filter((x, i) => (x.salary > 35000 && x.age > 25  || x.bonus > 500))

  // console.log(filterData); 

  return (
    <table border="1px" >
      <tr>
        <th>name</th>
        <th>age</th>
        <th>salary</th>
        <th>bonus</th> 
        <th>status</th>
      </tr>

      {
        filterData.map((x, i) => {
          return (
            <>
              <tr>
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>{x.salary}</td>
                <td>{x.bonus}</td>
                <td>{x.status}</td>
              </tr>
            </>
          )
        })
      }
    </table>
  );
}

export default App;
