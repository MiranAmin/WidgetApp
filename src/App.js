import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framwork",
  },
  {
    title: "Why use React?",
    content: "It is very code for code reusability",
  },
  {
    title: "How do you use react?",
    content: "You use it by createing components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
