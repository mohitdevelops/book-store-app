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

	return (
		<tr>
			<td>
				<img src={image} alt={title} className={classes.itemImage} />
			</td>
			<td className={classes.left}>{title}</td>
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
