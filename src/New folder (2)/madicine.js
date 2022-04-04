import React from 'react';

function Madicine(props) {
    let data = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        }
    ];
    let filterData = data.filter((x, i) => (x.quantity > 15 && x.expiry > 2000))

    let total = filterData.reduce((acc, x) => acc + x.quantity + x.expiry, 0);


    console.log(filterData.length);

    return (
        <div>
            <table border="1px solid black" cellpadding="40px">
                <tr>
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>expiry</th>
                    <th>status</th>
                    <th>total</th>
                </tr>

                {
                    filterData.map((x, i) => {
                        return (
                            <>
                                <tr align="center">
                                    <td>{x.name}</td>
                                    <td>{x.quantity}</td>
                                    <td>{x.price}</td>
                                    <td>{x.expiry}</td>
                                    <td>{x.status.toString()}</td>
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

export default Madicine;