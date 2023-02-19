import React from "react";
import CardItem from "./CardItem";
import "./Styles/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>React Cards</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cat.avif"
              text="Lorem Ipsum, giving information on its origins."
              label="Lorem Ipsum"
              path="/services"
            />
            <CardItem
              src="images/dog.avif"
              text="Lorem Ipsum, giving information on its origins."
              label="Lorem Ipsum"
              path="/products"
            />
            <CardItem
              src="images/lion.avif"
              text="Lorem Ipsum, giving information on its origins."
              label="Lorem Ipsum"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/turtle.avif"
              text="Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              label="Lorem Ipsum"
              path="/services"
            />
            <CardItem
              src="images/fox.avif"
              text="Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              label="Lorem Ipsum"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/tiger.avif"
              text="Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              label="Lorem Ipsum"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
