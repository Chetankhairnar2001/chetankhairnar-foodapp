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
      name: "Pav Bhaji 🥙🎂",
      rating: "3.5/5"
    },
    {
      name: "Cake 🎂",
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
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("NonVeg");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "2.5rem", color: "white" }}>
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
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((items) => (
            <li
              key={items.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "70%",
                margin: "1rem auto",
                borderRadius: "0.5rem",
                fontWeight: "bolder"
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
          paddingTop: "2rem",
          fontWeight: "bolder"
        }}
      >
        {" "}
        Thankyou for visiting the website
      </div>
    </div>
  );
}
