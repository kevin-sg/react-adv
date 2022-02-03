import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

const product = products[0];

const ShopingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<ProductCard
				product={product}
				initialValues={{
					count: 4,
					// maxCount: 10,
				}}
			>
				{({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
		</div>
	);
};

export default ShopingPage;
