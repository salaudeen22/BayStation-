import React, { useState } from "react";
import Swal from "sweetalert2";
import CheckoutSummary from "./Checkout";

const recipes = [
  
    {
      id: 3,
      title: "Badam Milk",
      price: 20.00,
      description: "A nutritious and flavorful milk beverage with the goodness of almonds.",
      image: "https://survey-25e04.web.app/images/items/beverages/1.png",
      category: "beverage",
    },
    {
      id: 4,
      title: "Hot Chocolate",
      price: 20.00,
      description: "Indulge in the richness of smooth and velvety hot chocolate.",
      image: "https://survey-25e04.web.app/images/items/beverages/2.png",
      category: "beverage",
    },
    {
      id: 5,
      title: "Bournvita",
      price: 20.00,
      description: "A delightful chocolate malt drink mix, enriched with essential nutrients, perfect for a rich and flavorful beverage when mixed with milk.",
      image: "https://survey-25e04.web.app/images/items/beverages/3.png",
      category: "beverage",
    },
    {
      id: 6,
      title: "Diet Coffee",
      price: 20.00,
      description: "A refreshing and low-calorie coffee blend, perfect for those looking for a healthier coffee option.",
      image: "https://survey-25e04.web.app/images/items/beverages/4.png",
      category: "beverage",
    },
    {
      id: 7,
      title: "Flavoured Tea's",
      price: 20.00,
      description: "Experience a delightful array of flavored teas, each crafted with a unique blend of aromatic herbs and spices.",
      image: "https://survey-25e04.web.app/images/items/beverages/5.png",
      category: "beverage",
    },
    {
      id: 8,
      title: "Lime Tea",
      price: 15.00,
      description: "Refresh your senses with the zesty and invigorating taste of lime-infused tea, a perfect choice to brighten your day.",
      image: "https://survey-25e04.web.app/images/items/beverages/7.png",
      category: "beverage",
    },
    {
      id: 9,
      title: "Coffee",
      price: 15.00,
      description: "Indulge in the rich aroma and robust flavor of our signature coffee, a perfect companion for your moments of relaxation.",
      image: "https://survey-25e04.web.app/images/items/beverages/7.png",
      category: "beverage",
    },
    {
      id: 10,
      title: "Regular Tea",
      price: 10.00,
      description: "A classic blend of carefully selected tea leaves, offering a soothing and timeless experience in every sip.",
      image: "https://survey-25e04.web.app/images/items/beverages/8.png",
      category: "beverage",
    },
  ];
  
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRecipes =
    selectedCategory === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showCheckoutSummary, setShowCheckoutSummary] = useState(false);

  const handleOrder = (id) => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setSelectedItems([...selectedItems, selectedRecipe]);

        Swal.fire({
          title: "Order!",
          text: "Your order has been Processing.",
          icon: "success",
        });
      }
    });
  };

  const handleCheckout = () => {
    setShowCheckoutSummary(true);
  };

  const handleCloseCheckoutSummary = () => {
    setShowCheckoutSummary(false);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's Specials</h2>
        <button onClick={handleCheckout}>Check out</button>
      </div>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange("all")}>All</button>
        <button onClick={() => handleCategoryChange("pasta")}>Pasta</button>
        <button onClick={() => handleCategoryChange("beverage")}>
          Beverages
        </button>
        <button onClick={() => handleCategoryChange("seafood")}>
          Sea Food
        </button>
        <button onClick={() => handleCategoryChange("sandwich")}>
          Sandwich
        </button>
        <button onClick={() => handleCategoryChange("salad")}>
          Jumbo Salad
        </button>
        <button onClick={() => handleCategoryChange("maggie")}>Maggie</button>
        <button onClick={() => handleCategoryChange("juice")}>Juice</button>
        <button onClick={() => handleCategoryChange("subs")}>Sub's</button>
      </div>

      <div className="cards">
        {filteredRecipes.map((recipe) => (
          <div className="menu-items" key={`recipe-${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>₹{`${recipe.price.toFixed(2)}`}</p>
              </div>
            </div>
            <p>{recipe.description}</p>
            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>
              Order Now
            </button>
          </div>
        ))}
      </div>
      {showCheckoutSummary && (
        <CheckoutSummary
          selectedItems={selectedItems}
          onClose={handleCloseCheckoutSummary}
        />
      )}
    </div>
  );
}

export default Menu;
