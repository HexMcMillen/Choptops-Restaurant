import React from "react";

const LargeMenuItem = (props) => {

    const { name, description, price } = props;

    return(
        <div className="menuItemLarge">
            <h1 className="itemName">-{ name }-</h1>
            <h1 className="itemDescription">{ description }</h1>
            <div className="blankSpace"></div>
            <h1 className="itemDescription">Regular Toppings ($0.50 per Topping):</h1>
            <h1 className="itemDescription">Lettuce | Tomato | Onion | Cheese</h1>
            <h1 className="itemDescription">(American, Swiss, Pepper Jack, Cheddar Jack)</h1>
            <div className="blankSpace"></div>
            <h1 className="itemDescription">Premuim Toppings ($1.00 per Topping):</h1>
            <h1 className="itemDescription">Onion Rings | Coleslaw | Fried Egg | Guacamole</h1>
        </div>
    );
}

export default LargeMenuItem;