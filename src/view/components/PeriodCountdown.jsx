import React from 'react';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => (
  <span className='h2 my-2 fw-bold'>You are good to go!</span>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className='display-4 fw-bold'>
        {days}:{hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const PeriodCountdown = () => {
  return <Countdown date={Date.now() + 5000000000} renderer={renderer} />;
};

export default PeriodCountdown;