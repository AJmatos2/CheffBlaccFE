import React, { useState } from "react";
import { css, cx } from "@emotion/react";

const Reviews = () => {
  const review = {
    0: {
      client: "[Ig instagram name ]",
      title: "I just had to Reach Out",
      statement:
        "The food was amazing. The cheff Absolutely killed the vegan Cauliflower corn fritters! I'll Definitely be contacting you real real soon, God Bless!",
      rating: "★ ★ ★ ★ ★",
    },
    1: {
      client: "[Ig instagram name ]",
      title: "Completely proffesional from arrival to set-up to break down",
      statement:
        "Cannnot for a second being to express how much I truly enjoyed the experience CheffBlacc provided. Given the freedom to choose exactly what he thought worked well together because it was all delicious and expertly designed. A three course meal for a party of 15, was provided in a timely and efficient manner providing an unforgettable experience. The food was prepared perfectly to the T. I can't stress how amazing the settting was made because of his excellent planning.",
      rating: "★ ★ ★ ★ ★",
    },
    2: {
      client: "[Ig instagram name ]",
      title: "Didnt regret my decision for one moment",
      statement:
        "Do yourself a favor and book this servicee. It is unmatched. The staff truly cares about your experience. The food is absolutely amazing – everything we tasted melted in other mouths. Absolutely the best meal we had while in. Highly recommend",
      rating: "★ ★ ★ ★ ★",
    },
  };

  const [current, setCurrent] = useState(review[0]);

  const [active, setActive] = useState(0);

  const handleSetClick = (event) => {
    setCurrent(review[event.target.getAttribute("data-review")]);
    setActive(event.target.getAttribute("data-review"));
  };
  return (
    <div className="slider">
      <h1>
        <em> {current.title}</em>
      </h1>
      <p> {current.client}</p>
      <p> {current.statement}</p>
      <h4>{current.rating}</h4>
      <div className="spanSlider">
        {Object.keys(review).map((index) => (
          <span
            onClick={(event) => handleSetClick(event)}
            data-review={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
