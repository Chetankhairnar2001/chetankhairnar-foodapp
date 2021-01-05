import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Veg: [
    {
      name: "Pizza 🍕",
      rating: "4/5"
    },
    {
      name: "Pav Bhaji 🥙",
      rating: "3.5/5"
    },
    {
      name: "Paneer Tikka 🍛 ",
      rating: "5/5"
    }
  ],

  Chinese: [
    {
      name: "Manchurian Soup 🍜",
      rating: "5/5"
    },
    {
      name: "Chow mein 🧆",
      rating: "4/5"
    }
  ],
  NonVeg: [
    {
      name: "Chicken-Kebab  🍗",
      rating: "4/5"
    },
    {
      name: "Hyderabadi biryani 🍛",
      rating: "5/5"
    },
    {
      name: "Prawns Rice 🍤",
      rating: "4/5"
    }
  ],
  Desert: [
    {
      name: "Black Forest Cake 🎂",
      rating: "5/5"
    },
    {
      name: "Gulab Jamun 🍯",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("NonVeg");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "2.5rem", color: "darkorange" }}>
        {" "}
        🍱 GoodFood GoodLife{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        This is place which i love this most. Select a genre to get started
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "yellow",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1.3px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((items) => (
            <li
              key={items.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "55%",
                margin: "1rem auto",
                borderRadius: "0.5rem",
                fontWeight: "bolder",
                backgroundColor: "wheat"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {items.name} </div>
              <div style={{ fontSize: "smaller" }}> {items.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          color: "white",
          paddingTop: "2rem"
        }}
      >
        {" "}
        <div style={{ color: "orange", paddingTop: "4rem" }}>
          {" "}
          Thankyou for visiting the website{" "}
        </div>
        <div style={{ color: "blue" }}> Made with ♥ by Chetan Khairnar </div>
        <a
          href="https://chetankhairnar-portfolio.netlify.app/"
          style={{
            textDecoration: "none",
            color: "yellowgreen",
            fontFamily: "fantasy"
          }}
        >
          My PortFolio
        </a>
      </div>
    </div>
  );
}
