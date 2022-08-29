import React from "react";

const Empty = ({ title }) => (
  <div id="empty" className="card bg-dark m-4">
    <div className="card-body text-center">
      <i className="bi bi-emoji-frown h1"></i>
      <div>
        No items found for "<strong>{title}</strong>."
      </div>
    </div>
  </div>
);

export default Empty;
