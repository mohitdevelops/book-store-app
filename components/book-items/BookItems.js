import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import classes from "./book-item.module.css";
import { cartStoreAction } from "../../store/cart-items";

export default function BookItems(props) {
	const { id, title, price, image } = props;
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartItems.items);
	const isAdded = cartItems.some((item) => item.id === id);

	const addToCartHandler = () => {
		dispatch(
			cartStoreAction.addProduct({
				id,
				title,
				price,
				image,
			})
		);
	};

	const goToCartBtn = (
		<Link href="/cart" className={classes.addedBtn}>
			<FaShoppingCart /> Go to Cart
		</Link>
	);

	return (
		<div className={classes.product__item}>
			<Link href={`/products/${id}`} className={classes.image_box}>
				<Image src={image} alt={title} className={classes.image} fill />
			</Link>
			<div className={classes.desc_box}>
				<Link href={`/products/${id}`}>
					<h3>{title}</h3>
				</Link>
				<div className={classes.bottom}>
					<p>${price}</p>
					{isAdded ? (
						goToCartBtn
					) : (
						<button onClick={addToCartHandler}>Add to cart</button>
					)}
				</div>
			</div>
		</div>
	);
}
