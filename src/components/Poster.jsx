import React from "react";

const Poster = ({url}) => {
  return (
    <div className="flex-shrink-0">
      <img
        className="w-[25vw] rounded-3xl"
        src={url}
        alt=""
      />
    </div>
  );
};

export default Poster;
