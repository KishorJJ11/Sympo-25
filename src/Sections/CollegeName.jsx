import React from 'react';
import '../text.css'; // Make sure to import your font CSS file
import 'animate.css';

const CollegeName = () => {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-6 xl:p-6 m-9">
      <svg width="100%" height="200" viewBox="0 0 500 200">
       <path id="curve" d="M 50 150 A 250 250 0 0 0 450 150" fill="transparent"/>

        <text width="500" textAnchor="middle">
          <textPath href="#curve" startOffset="50%" className="spidy jce-font">
            JERUSALEM COLLEGE OF ENGINEERING
          </textPath>
        </text>
      </svg>

      <br />
      <h2 className="clg-font text-xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold bg-white bg-clip-text text-transparent font-otherfont animate__animated animate__fadeInUp duration-500">
        PRESENTS
      </h2>
      <br />
      <h1 className="sympo-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold bg-white bg-clip-text text-transparent font-aboutfont animate__animated animate__fadeInUp duration-500">
        Technovanza'25 
      </h1>
    </div>
  );
}

export default CollegeName;
