import React from "react";

const MenuItemTwo = (props) => {

    const { name, description, price } = props;

    return(
        <div className="itemContainer">
            <h2>{ name }</h2>
            <p>{ description }</p>
            <p>{ price }</p>
       </div>
    );
}

export default MenuItemTwo;