import React, { useState } from "react";

const ReactToggle = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
};

export default ReactToggle;
