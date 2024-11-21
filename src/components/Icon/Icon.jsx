import React from "react";

const Icon = () => {
  return (
   <div className="">
     <img
      src="/images/snowflake.png"
      alt="Snowflake Icon"
      className="absolute w-12 h-12 motion-safe:animate animate-spin top-10 left-2"
    />
     <img
      src="/images/snowflake.png"
      alt="Snowflake Icon"
      className="absolute w-8 h-8 motion-safe:animate animate-spin top-36 md:top-8  left-2/3"
    />
     <img
      src="/images/snowflake.png"
      alt="Snowflake Icon"
      className="absolute w-12 h-12 motion-safe:animate animate-spin top-1 right-4"
    />
   </div>
  );
};

export default Icon;