import React from 'react';

function employee(props) {
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

    let filterData = data.filter((x, i) => (x.salary > 10000 && x.age > 20))

    let total = filterData.reduce((acc, x) => acc + x.salary + x.bonus, 0);


    console.log(filterData.length);
    return (
        <div>
            <table border="1px solid black" cellpadding="40px">
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>salary</th>
                    <th>bonus</th>
                    <th>status</th>
                    <th>bonus + salary</th>
                    <th>total</th>
                </tr>

                {
                    filterData.map((x, i) => {
                        return (
                            <>
                                <tr align="center">
                                    <td>{x.name}</td>
                                    <td>{x.age}</td>
                                    <td>{x.salary}</td>
                                    <td>{x.bonus}</td>
                                    <td>{x.status.toString()}</td>
                                    <td>{x.bonus + x.salary}</td>
                                    {i === 0 ? <td rowspan={filterData.length}> {total} </td> : null}
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default employee;