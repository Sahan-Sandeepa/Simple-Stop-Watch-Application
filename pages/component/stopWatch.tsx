import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (isRunning) {
            intervalId = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    const startAndStop = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const reset = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h4">
                {hours.toString().padStart(2, "0")}:
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </Typography>
            <div style={{ marginTop: "20px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={startAndStop}
                    style={{ marginRight: "10px" }}
                >
                    {isRunning ? "Stop" : "Start"}
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={reset}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default Stopwatch;
