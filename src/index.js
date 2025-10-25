import React from "react";
import ReactDOM from "react-dom/client";

// Component is just a JavaScript function
// Component must start with capital letter
// Since Hook, function component is the standard
// Function must return
function Header() {
    // App is the parent component and child components below
    // Return a JSX = JavaScript XML
    // declarative
    return <h1>Hsuan's Piazzagi BomBom. </h1>
}

// Component to display the pizza image
function PizzaImage1() {
    return (
        <div>
            <img
                src="pizzas/spinaci.jpg"
                alt="Spinach Pizza"/>
            <h3>Spinach Pizza</h3>
            <p>Tomato, mozzarella, spinach, and ricotta cheese</p>
            <p>10</p>
        </div>
    );
}

function PizzaImage2() {
    return (
        <div>
            <img
                src="pizzas/salamino.jpg"
                alt="Salamino Pizza"/>
            <h4>Salamino Pizza</h4>
            <p>Tomato, mozzarella, salami, and oregano</p>
            <p>12</p>
        </div>
    );
}

function PizzaImage3() {
    return (
        <div>
            <img
                src="pizzas/prosciutto.jpg"
                alt="Prosciutto Pizza"/>
            <h4>Prosciutto Pizza</h4>
            <p>Tomato, parmesan, prosciutto, and basil</p>
            <p>15</p>
        </div>
    );
}

function PizzaImage4() {
    return (
        <div>
            <img
                src="pizzas/margherita.jpg"
                alt="Margherita Pizza"/>
            <h4>Margherita Pizza</h4>
            <p>Crushed tomato, mozzarella, basil, and olive oil</p>
            <p>13</p>
        </div>
    );
}

function PizzaImage5() {
    return (
        <div>
            <img
                src="pizzas/funghi.jpg"
                alt="Funghi Pizza"/>
            <h4>Funghi Pizza</h4>
            <p>Mushroom, onion, kale, and mozzarella</p>
            <p>14</p>
        </div>
    );
}

function FocacciaImage() {
    return (
        <div>
            <img
                src="pizzas/focaccia.jpg"
                alt="Focaccia"/>
            <h4>Salamino Pizza</h4>
            <p>Rosemary, yeast, flour, and olive oil</p>
            <p>6</p>
        </div>
    );
}

// Component to display pizza information
function App() {
    return (
        <div>
           <Header />
           <PizzaImage1 />
           <PizzaImage2 />
           <PizzaImage3 />
           <PizzaImage4 />
           <PizzaImage5 />
           <FocacciaImage />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);