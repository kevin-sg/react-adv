import { CSSProperties, useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
	className?: string;
	img?: string;
	style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
	const { product } = useContext(ProductContext);

	const imgToShow: string = img ? img : product.img ? product.img : noImage;

	return (
		<img
			className={`${styles.productImg} ${className}`}
			style={style}
			src={imgToShow}
			alt="Product"
		/>
	);
};
