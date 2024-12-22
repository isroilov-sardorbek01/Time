import React, { useState, useEffect } from "react";

function Time() {
    const [time, setTime] = useState({
        newYork: "",
        uzbekistan: "",
        russia: "",
    });

    useEffect(() => {
        function updateTime() {
            const currentTime = new Date();
            setTime({
                newYork: currentTime.toLocaleString("en-US", {
                    timeZone: "America/New_York",
                }),
                uzbekistan: currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Tashkent",
                }),
                russia: currentTime.toLocaleString("en-US", {
                    timeZone: "Europe/Moscow",
                }),
            });
        }

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="flex flex-col gap-4 mt-10 countries">
                <div className="w-full text-center bg-red-500 rounded-md country">
                    <h1 className="text-[60px]">{time.newYork}</h1>
                    <p className="text-[60px]">New York</p>
                </div>
                <div className="w-full text-center bg-blue-500 rounded-md country">
                    <h1 className="text-[60px]">{time.uzbekistan}</h1>
                    <p className="text-[60px]">O'zbekiston</p>
                </div>

                <div className="w-full text-center bg-yellow-300 rounded-md country">
                    <h1 className="text-[60px]">{time.russia}</h1>
                    <p className="text-[60px]">Rassiya</p>
                </div>
            </div>
        </div>
    );
}

export default Time;
