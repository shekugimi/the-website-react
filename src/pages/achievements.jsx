import React from 'react';
import '../styles/style.css';

const Achievements = () => {
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Our Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-body-tertiary border rounded-md">
          <h2 className="text-xl font-semibold mb-4">First Achievement</h2>
          <p className="text-gray-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="p-6 bg-body-tertiary border rounded-md">
          <h2 className="text-xl font-semibold mb-4">Second Achievement</h2>
          <p className="text-gray-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="p-6 bg-body-tertiary border rounded-md">
          <h2 className="text-xl font-semibold mb-4">Third Achievement</h2>
          <p className="text-gray-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
