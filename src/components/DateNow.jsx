import React, { useEffect, useState } from "react";

function DateNow() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const fromDate = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(fromDate);
    }, []);

    function formatTime(date) {
        const hours = String(date.getHours()).padStart(2, "0");
        const minute = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${hours}:${minute}:${seconds}`;
    }
    return <div className="container">
        <h1>Date Now:</h1>
        <div className="text-[100px] text-center">{formatTime(time)}</div>
    </div>;
}

export default DateNow;
