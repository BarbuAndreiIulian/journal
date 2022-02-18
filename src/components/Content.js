import React from "react";
import "./Content.css";
import Card from "./Card";
import data from "./data";

const Content = () => {
  const setCard = data.map((el) => {
    return (
      <Card
        imgEl={el.imageUrl}
        countryEl={el.location}
        titleEl={el.title}
        startdateEl={el.startDate}
        enddateEl={el.endDate}
        descriptionEl={el.description}
        openSpots={el.open}
      />
    );
  });
  return <div className="content--container">{setCard}</div>;
};

export default Content;
