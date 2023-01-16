import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartStoreAction } from "../../store/cart-items";
import classes from "./cart.module.css";

export default function CartItems(props) {
	const { id, image, title, price, quantity, totalPrice } = props.items;
	const dispatch = useDispatch();

	const removeQuantity = () => {
		dispatch(cartStoreAction.removeProduct(id));
	};

	const addQuantity = () => {
		dispatch(
			cartStoreAction.addProduct({
				id,
				title,
				image,
				price,
				quantity,
			})
		);
	};

	console.log(`cart items ===== ${price}`);
	console.log(`cart items ===== ${typeof price}`);
	console.log(`cart items total price ===== ${totalPrice}`);
	console.log(`cart items total price ===== ${typeof totalPrice}`);

	return (
		<tr>
			<td>
				<Link href={`/products/${id}`}>
					<Image
						src={image}
						alt={title}
						width={100}
						height={100}
						className={classes.itemImage}
					/>
				</Link>
			</td>
			<td className={classes.left}>
				<Link href={`/products/${id}`}>{title}</Link>
			</td>
			<td>${price.toFixed(2)}</td>
			<td>
				<div className={classes.quantity}>
					<button onClick={removeQuantity}>-</button>
					<span>{quantity}</span>
					<button onClick={addQuantity}>+</button>
				</div>
			</td>
			<td>${totalPrice.toFixed(2)}</td>
		</tr>
	);
}
