import React from "react";
import ReactDOM from "react-dom/client";


const heading = (
    <h1 id="heading">
    <h2>My name is Antony Gonsalviz</h2>
  </h1>
);

// React component.
const HeadingComponennt =()=>{
    return <h1>
        Prashant Aggarwal will be a superhero
    </h1>
}

const Component1 = ()=>{
    return <div className="Title">
        <h1>
            Hi, I'm Prashant Aggarwal
        </h1>
    </div>
}
// Inserting a component into other component is known as component composition.
const Component2 = ()=>( // if we use () then we don't need to write return..
    <div>
        <Component1/>  
        <h2>
            I'll be a great Engineer......🚀
        </h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2/>);
