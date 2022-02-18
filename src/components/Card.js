import React from "react";
import "./Card.css";

const Card = (props) => {
  {
    props.openSpots === 0 && (
      <div className="abs">
        <img className="abs" src="./assets/soldout.svg" />
      </div>
    );
  }
  return (
    <div className="card--container">
      {props.openSpots === 0 && (
        <div className="abs">
          <img className="abs" src="./assets/soldout.svg" />
        </div>
      )}
      <img src={`./assets${props.imgEl}`} />
      <div class="About">
        <div className="location">
          <img className="point" src="./assets/point.svg" />
          <p className="country">{props.countryEl}</p>
          <a className="maps" href="https://google.com">
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.titleEl}</h1>
        <p className="date">
          {props.startdateEl} - {props.enddateEl}
        </p>
        <p className="description">{props.descriptionEl}</p>
      </div>
    </div>
  );
};

export default Card;
