import React, { useState } from "react";

const Tour = ({ id, name, price, info, image, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          not interested
        </button>
      </footer>
    </section>
  );
};

export default Tour;