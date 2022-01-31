import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
	children?: ReactElement | ReactElement[];
	className?: string;
	product: Product;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
	const { counter, increaseBy } = useProduct({ product, onChange, value });

	return (
		<Provider value={{ counter, product, increaseBy }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
