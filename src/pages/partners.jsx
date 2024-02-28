import React from "react";
import "../styles/about.css";
import companyData from "../data/info/companyData.json"; // Assuming you have a JSON file with company data

function partners() {
  return (
    <div className="mt-28 mb-28">
      <div className="container px-4 md:px-6 mx-auto pb-16 flex flex-col items-center relative">
        <div className="mb-8 text-center text-white">
         <p className="text-3xl font-bold">

         Our alumni works at
         </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full rounded-xl overflow-hidden">
          {companyData.map((company, index) => (
            <div
              key={index}
              className={`px-5 py-8 sm:px-10 sm:py-8 md:px-10 md:p-10 lg:px-8 lg:py-12 h-24 md:h-32 w-full flex items-center justify-stretch bg-theme-neutral-600 bg-opacity-20 relative`}
            >
              <div className="flex items-center justify-center h-full w-full relative">
                <span className="opacity-40 image_container">
                  <img
                    src={require(`../data/images/${company.image}`)}
                    alt={company.name}
                    className="image"
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default partners;
