import { Typography } from "@material-tailwind/react";
import React from "react";
import Countdown from "react-countdown";
import { Progress } from "@material-tailwind/react";

// Random component
const Completionist = () => <span>Tims's up!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Typography variant="h1" color="red" textGradient>
        {hours}:{minutes}:{seconds}
      </Typography>
    );
  }
};

function CountdownTimer() {
  return (
    <div>
      <div>
        <Typography variant="h1" color="blue" textGradient>
          โปรโมชั่นจะหมดในอีก
        </Typography>
      </div>
      <div>
        <Progress value={63} label="Completed" color="red" />
      </div>
      <div class="flex justify-center">
        <Countdown date={Date.now() + 1000000000} renderer={renderer} />
      </div>
    </div>
  );
}

export default CountdownTimer;
