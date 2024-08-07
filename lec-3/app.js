import React from "react";
import ReactDOM from "react-dom/client"; // Make sure you're using the correct import

const elem = <span>React Element</span>

const Title =  () => (
<h1 className = "head" tabIndex ="5" >
{elem}
Namaste React using JSX
</h1> 
);

//component composition
//< Title />

//react functional component----->

const number = 1000;
const HeadingComponent = () => (
    <div id="container">
        <h2> {number} </h2>
        <h2> {100 + 200} </h2>
        {Title ()}
        <Title/>
        <Title> </Title>

        <h1 className="heading">Namaste react functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


//using react------>
// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Namaste React"
// );
// console.log(heading);

//JSX-->react element
// const jsxHeading = (
// <h1 className = "head" tabIndex ="5" >
// Namaste React using JSX
// </h1> 
// );
//console.log(jsxHeading);

//root.render(heading);
//root.render(jsxHeading);



