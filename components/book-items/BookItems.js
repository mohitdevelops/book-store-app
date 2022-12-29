import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import classes from "./book-item.module.css";
import { cartStoreAction } from "../../store/cart-items";

export default function BookItems(props) {
	const { id, title, price, imageUrl, isAdded } = props;
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(
			cartStoreAction.addProduct({
				id,
				title,
				price,
				imageUrl,
				isAdded,
			})
		);
		console.log(isAdded);
	};

	return (
		<div className={classes.product__item}>
			<Link href={`/products/${id}`} className={classes.image_box}>
				<Image src={imageUrl} alt={title} className={classes.image} fill />
			</Link>
			<div className={classes.desc_box}>
				<h3>{title}</h3>
				<div className={classes.bottom}>
					<p>${price}</p>
					<button onClick={addToCartHandler}>
						{!isAdded ? "In your cart" : "Add to cart"}
					</button>
				</div>
			</div>
		</div>
	);
}
