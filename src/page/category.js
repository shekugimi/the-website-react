import React from 'react';
import categoriesData from '../data/info/categories.json';

const Category = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <div key={category.id} className="category_card p-4 border rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
