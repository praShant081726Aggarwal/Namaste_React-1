import React from "react"
import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React")
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// console.log(heading)

const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        [React.createElement("h1", {}, "I'm a React tag"), React.createElement("h2", {}, "I'ce changed CDN to React ")])
)


root.render(parent)