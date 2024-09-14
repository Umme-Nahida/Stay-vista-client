import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={` 
    flex 
    flex-col 
    justify-center 
    items-center `}
    >
      <ScaleLoader size={100} color="red" />
    </div>
  );
};

export default Loader;
