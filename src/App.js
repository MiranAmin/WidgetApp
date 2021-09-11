import React from 'react';
import Accordion from './components/Accordion';


const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framwork"
    },
    {
        title: "Why use React?",
        content: "It is very code for code reusability"
    },
    {
        title: "How do you use react?",
        content: "You use it by createing components"
    }
]

export default () => {
    return <div>
        <Accordion items={items} />
    </div>
};