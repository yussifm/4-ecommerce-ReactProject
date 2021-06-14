const Category = ({ FilterItems, Cate }) => {
	return (
		<div className="btn-container">
			{Cate.map((category, index) => {
				return (
					<button
						type="button"
						key={index}
						className="filter-btn"
						onClick={() => FilterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Category;
