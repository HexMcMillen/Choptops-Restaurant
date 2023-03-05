import React from "react";
import MenuItemTwo from "../components/MenuItemTwo";

const DrinksMenu = () => {
    return(
        <div className="containerMenu">
            <div className="foodContainer">
                <div className="gridContainer">
                    <div className="grid-item1">
                        <h1>Desserts</h1>
                        <p>$3.00</p>
                    </div>
                    <div className="grid-item2">
                        <MenuItemTwo name="Jack" description="Pumpkin Cheesecake with Whipped Cream" />
                        <MenuItemTwo name="Sally" description="Blueberry Cheesecake with Whipped Cream" />
                    </div>
                    <div className="grid-item1">
                        <h1>Shakes | Malts</h1>
                        <p>$5.00</p>
                    </div>
                    <div className="grid-item2">
                        <MenuItemTwo name="Bride of Frankenstein" description="Vanilla Shake with Whipped Cream, Silver Sprinkles, and Chocolate Syrup" />
                        <MenuItemTwo name="Crystal Lake" description="'Blue' Vanilla Shake with Strawberry Drizzle and Candy Topper" />
                        <MenuItemTwo name="Frankenstein" description="Mint Ice Cream withe Whipped Cream and Mini Peanut Butter Cups" />
                        <MenuItemTwo name="Killer Klown" description="Cotton Candy Shake with Whipped Cream and Sprinkles" />
                        <MenuItemTwo name="Slimer" description="Mint Chocolate Chip Shake with Whipped Cream and Cherries" />
                    </div>
                    <div className="grid-item1">
                        <h1>Drinks</h1>
                        <p>$1.00</p>
                    </div>
                    <div className="grid-item2">
                        <MenuItemTwo name="Pepsi" />
                        <MenuItemTwo name="Diet Pepsi" />
                        <MenuItemTwo name="Sprite" />
                        <MenuItemTwo name="Orange" />
                        <MenuItemTwo name="Mountain Dew" />
                        <MenuItemTwo name="Iced Tea" />
                        <MenuItemTwo name="Water" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrinksMenu;