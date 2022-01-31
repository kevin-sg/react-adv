import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";

import "../styles/custom-styles.css";

const product = {
	id: "1",
	title: "Coffee Mug - Card",
	img: "./coffee-mug.png",
};

const ShopingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				<ProductCard product={product} className="bg-dark text-white">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title title="Test 1" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>

				<ProductCard product={product} className="bg-dark text-white">
					<ProductImage
						className="custom-image"
						style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)" }}
					/>
					<ProductTitle className="text-bold" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>

				<ProductCard product={product} style={{ backgroundColor: "#94E4E4" }}>
					<ProductImage style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)" }} />
					<ProductTitle title="Test Card 3" style={{ fontWeight: "bold" }} />
					<ProductButtons style={{ display: "flex", justifyContent: "end" }} />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShopingPage;
