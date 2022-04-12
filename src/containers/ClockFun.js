import React, {useEffect, useState} from 'react';

function ClockFun(props) {
    const [time, setTime] = useState(new Date);

    const tick = () => {
        setTime(new Date());
    }

    useEffect(
        () => {
            const timerID =setInterval(() => tick (), 1000);

            return () => {
                clearInterval(timerID);
            }
        },
    [time])
    return (
        <div>
            <center><h1>{time.toLocaleTimeString()}</h1></center>
        </div>
    );
}

export default ClockFun;