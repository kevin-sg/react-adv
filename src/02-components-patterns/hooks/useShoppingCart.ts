import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldShoppingCard) => {
			// Method count product 1
			const productInCart: ProductInCart = oldShoppingCard[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;

				return { ...oldShoppingCard, [product.id]: productInCart };
			}

			// Delete product
			const { [product.id]: toDelete, ...rest } = oldShoppingCard;
			return rest;

			// Method count product 2
			// if (!count) {
			// Method 1
			// const { [product.id]: toDelete, ...rest } = oldShoppingCard;
			// return rest;

			// Method 2
			// delete oldShoppingCard[product.id];
			// return { ...oldShoppingCard };
			// }

			// return { ...oldShoppingCard, [product.id]: { ...product, count } };
		});
	};

	return { shoppingCart, onProductCountChange };
};
