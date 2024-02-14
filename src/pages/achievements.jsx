import React from 'react';
import '../styles/style.css';

const Achievements = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Achievements</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4">
          <h2 className="text-lg font-semibold">First Achievement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold">Second Achievement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold">Third Achievement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
