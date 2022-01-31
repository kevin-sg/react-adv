import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldShoppingCard) => {
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
		});
	};

	return { shoppingCart, onProductCountChange };
};
