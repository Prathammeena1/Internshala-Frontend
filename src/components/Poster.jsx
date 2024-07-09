import React from "react";

const Poster = ({url}) => {
  return (
    <div className="flex-shrink-0">
      <img
        className="w-[25vw]"
        src={url}
        alt=""
      />
    </div>
  );
};

export default Poster;
