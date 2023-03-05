import React from "react";
import MenuItemTwo from "../components/MenuItemTwo";

const FoodMenuTwo = () => {

    return(
        <div className="containerMenu">
            <div className="foodContainer">
                <div className="gridContainer">
                    <div className="grid-item1">
                        <h1>Appetizers</h1>
                    </div>
                    <div className="grid-item2">
                        <MenuItemTwo name="Boom Sticks" description="6 Mozzarella Sticks withe 'Bloody' Marinara" price="$7.00" />
                        <MenuItemTwo name="Frankenweenie" description="Mini Corndogs" price="$7.00" />
                        <MenuItemTwo name="Frights Night" description="Fried Pickle Spears with Ranch" price="$7.00" />
                        <MenuItemTwo name="Gremlins' Sampler" description="Chicken Tenders, Onion Rings, Mozarella Sticks, and Pickled Spears" price="$10.00" />
                        <MenuItemTwo name="Sid's Chicken Strips" description="4 Chicken Strips" price="$7.00" />
                        <MenuItemTwo name="Slaughterhouse" description="French Fries topped with Chop House Chili, Sour Cream, and Cheddar Cheese" />
                        <MenuItemTwo name="Swamp Thing" description="Chips and Guacamole" price="$6.00" />
                        <MenuItemTwo name="Vampire's Breath" description="1/2lb. Garlic Parmesan Chicken Bites with Marinara" price="$8.00" />
                    </div>
                    <div className="grid-item1">
                        <h1>Soups</h1>
                        <p>Cup- $3.00 | Bowl- $5.00</p>
                    </div>
                    <div className="grid-item2">
                        <MenuItemTwo name="Blood Bath" description="Tomato Soup (V)" />
                        <MenuItemTwo name="Chop Top" description="House Recipe of Chili with Beef" />
                        <MenuItemTwo name="Soup of the Day" description="Soup of the Day" />
                    </div>
                    <div className="grid-item1">
                        <h1>Specialty Grilled Hot Dogs</h1>
                        <p>1/4 lb. dog- $5.00</p>
                    </div>
                    <div className="grid-item2">
                        <MenuItemTwo name="Necronomi-dog" description="Topped with Mac n' Cheese" />
                        <MenuItemTwo name="Vorhees" description="Topped with Ketchup, Mustard, and Onion" />
                        <MenuItemTwo name="Winchester" description="Topped with Homemade Coleslaw" />
                    </div>
                    <div className="grid-item1">
                        <h1>Handhelds</h1>
                        <p>Served with Chips</p>
                        <p>(Can be subbed for Fries or Onion Rings for $1.50)</p>
                    </div>
                    <div className="grid-item2">
                        <h1>1/4 lb. Fresh-Made Burgers</h1>
                        <MenuItemTwo name="BoogieMan" description="Topped with Bleu Cheese and Bacon" price="$11.50" />
                        <MenuItemTwo name="Chop House" description="Topped with Chopped Burger, American Cheese, Chili, Fried Onion, and Bacon" price="$13.00" />
                        <MenuItemTwo name="Elm Street" description="Topped with Cheese, Bacon, Onion Rings, and BBQ Sauce" price="$11.50" />
                        <MenuItemTwo name="Fire Starter" description="Topped with Pepper Jack Cheese, Jalapenos, and Lime" price="$11.50" />
                        <MenuItemTwo name="Shinning" description="Topped with Cheddar Jack Cheese, Bacon, Lettuce, Tomato, and Onion" price="$12.50" />
                        <MenuItemTwo name="Stripe" description="Topped with American Cheese, Lettuce, Tomato, and Onion" price="$9.00" />
                        <MenuItemTwo name="The Script" description="Build your own Burger" price="$8.00+" />
                        <p>Regular Toppings ($0.50 per): Lettuce | Tomato | Onion | Cheese (American, Swiss, Pepper Jack, Cheddar Jack)</p>
                        <p>Premuim Toppings ($1.00 per): Onion Rings | Coleslaw | Fried Egg | Guacamole</p>
                    </div>
                    <div className="grid-item1"></div>
                    <div className="grid-item2">
                        <h1>Chicken Sandwiches</h1>
                        <MenuItemTwo name="Deadly Clown" description="Grilled Chicken Topped with Swiss Cheese, Bacon, Lettuce, Tomato, and Spicy Mayo" price="$13.00" />
                        <MenuItemTwo name="No Dana, Only Zule" description="Crispy Chicken topped with Cheddar Cheese, Lettuce, Tomato, and Spicy Mayo" price="$13.00" />
                    </div>
                    <div className="grid-item1"></div>
                    <div className="grid-item2">
                        <h1>In the Garden of Evil (Vegitarian | Vegan)</h1>
                        <MenuItemTwo name="Thinner" description="Beyond Burger, Tomato, Lettuce, and Onion" price="$12.00" />
                        <MenuItemTwo name="The Craft" description="Romaine Lettuce, Croutons, Parmesan Cheese, and Caesar Dressing" price="$12.00" />
                    </div>
                    <div className="grid-item1">
                        <h1>Sides</h1>
                        <p>$3.00</p>
                    </div>
                    <div className="grid-item2">
                        <MenuItemTwo name="Onion Rings" />
                        <MenuItemTwo name="Baked Mac n' Cheese" />
                        <MenuItemTwo name="French Fries" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodMenuTwo;