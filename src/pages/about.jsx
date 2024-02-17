import React from "react";
import "../styles/about.css"; // Import your CSS file for styling
import "../styles/style.css"; // Import your CSS file for styling
const Partners = () => {
  const companyLogos = [
    "https://www.gstatic.com/webp/gallery/1.jpg", // Google
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png", // Microsoft
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png", // IBM
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Tata_Consultancy_Services_%28TCS%29.svg/1280px-Tata_Consultancy_Services_%28TCS%29.svg.png", // TCS
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1280px-Facebook_Logo_%282019%29.png", // Facebook
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Adobe_logo_%282020%29.svg/1024px-Adobe_logo_%282020%29.svg.png", // Adobe
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png", // Samsung
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Verizon_Communications_logo_and_wordmark.svg/1280px-Verizon_Communications_logo_and_wordmark.svg.png", // Verizon
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Toyota_logo.svg/1280px-Toyota_logo.svg.png", // Toyota
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HP_logo_2012.svg/1280px-HP_logo_2012.svg.png", // HP
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Intel_logo_%282021%29.svg/1280px-Intel_logo_%282021%29.svg.png", // Intel
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cisco_logo.svg/1280px-Cisco_logo.svg.png", // Cisco
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Boeing_logo_%282020%29.svg/1280px-Boeing_logo_%282020%29.svg.png", // Boeing
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Oracle_Logo.svg/1280px-Oracle_Logo.svg.png", // Oracle
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Oracle_Logo.svg/1280px-Oracle_Logo.svg.png", // Amazon
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Netflix_2015_N_logo.svg/1280px-Netflix_2015_N_logo.svg.png", // Netflix
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/PayPal_2020_Logo.svg/1280px-PayPal_2020_Logo.svg.png", // PayPal
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Spotify_logo_vertical_black.jpg/1280px-Spotify_logo_vertical_black.jpg", // Spotify
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png", // LinkedIn
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/NVIDIA_logo.svg/1280px-NVIDIA_logo.svg.png", // NVIDIA
  ];

  const getRandomRotation = () => {
    return Math.floor(Math.random() * 31) - 15;
  };

  return (
    <section className="our_partnered_companies bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Partnered Companies
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="company_logo bg-white p-4 rounded-lg shadow-md transform rotate-[10deg] hover:rotate-0 transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
