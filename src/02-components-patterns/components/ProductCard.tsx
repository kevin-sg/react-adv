import { createContext, CSSProperties } from "react";

import { useProduct } from "../hooks/useProduct";
import {
	ProductContextProps,
	Product,
	onChangeArgs,
	InitialValues,
	ProductCartHandlers,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
	className?: string;
	initialValues?: InitialValues;
	product: Product;
	style?: CSSProperties;
	value?: number;
	children: (args: ProductCartHandlers) => JSX.Element;
	onChange?: (args: onChangeArgs) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
	className,
	initialValues,
	product,
	style,
	value,
	children,
	onChange,
}: Props) => {
	const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({
		initialValues,
		product,
		value,
		onChange,
	});

	return (
		<Provider value={{ counter, product, maxCount, increaseBy }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
