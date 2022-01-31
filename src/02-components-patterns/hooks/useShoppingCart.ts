import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldShoppingCard) => {
			if (!count) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCard;
				return rest;

				// Method 2
				// delete oldShoppingCard[product.id];
				// return { ...oldShoppingCard };
			}

			return { ...oldShoppingCard, [product.id]: { ...product, count } };
		});
	};

	return { shoppingCart, onProductCountChange };
};
