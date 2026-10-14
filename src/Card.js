import React, { useState } from "react";

function Card(props) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px 0",
        backgroundColor: "#ffffff",
        color: "#222",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{props.title}</h2>

      <p>
        Status: <strong>{liked ? "Liked ❤️" : "Not liked 🤍"}</strong>
      </p>

      <button
        onClick={handleLike}
        style={{
          padding: "10px 18px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: liked ? "#dc3545" : "#0d6efd",
          color: "white",
          cursor: "pointer",
        }}
      >
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default Card;
