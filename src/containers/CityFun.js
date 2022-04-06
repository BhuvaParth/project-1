import React, { useState } from 'react';

function CityFun(props) {

    const [id, setId] = useState(101);

    const Change = () => {
        setId(102);
    }
    return (
        <>
            <div>
                {id}
                <button onClick={() => Change ()}>Change ID</button>
            </div>
        </>
    );
}

export default CityFun;