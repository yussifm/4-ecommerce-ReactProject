import "./App.css";
import Menu from "./components/Menu";
import Category from "./components/Category";
import items from "./Data/data";
import React, { useState, useEffect } from "react";

const allCategories =['all', ...new Set( items.map((item) => { return item.category }) )];

function App() {
	const [menuItems, setItems] = useState(items);
	const [cate, setCate] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all' || category === 'ALL') {
      setItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setItems(newItem);
	};
	return (
		<main>
			<div className="main section">
				<div className="title">
					<h2>Our Menu</h2>
					<div className="underline"></div>
				</div>
        <Category FilterItems={filterItems} Cate={cate }/>
				<Menu Items={menuItems} />
			</div>
		</main>
	);
}

export default App;
