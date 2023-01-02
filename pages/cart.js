import Image from "next/image";
import cart from "../public/cart.png";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/cart-items/cart-items";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import classes from "./ui.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Cart() {
	const itemList = useSelector((state) => state.cartItems.items);
	const cartTotalAmount = useSelector((state) => state.cartItems.totalAmount);
	const grandTotal = cartTotalAmount + 40;

	const cartPageSection = (
		<Fragment>
			<div className="title_wrap text-center">
				<span>Your collection</span>
				<h2>Cart</h2>
			</div>
			<div className={classes.cart__main__wrap}>
				<table className={classes.cartTable}>
					<thead>
						<tr>
							<th className={classes.image}>Image</th>
							<th className={classes.left}>Product Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{itemList.map((el) => {
							return (
								<CartItems
									key={el.id}
									items={{
										id: el.id,
										title: el.title,
										image: el.image,
										price: el.price,
										quantity: el.quantity,
										totalPrice: el.totalPrice,
									}}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className={classes.checkout_wrap}>
				<table>
					<tbody>
						<tr>
							<td>Cart Subtotal</td>
							<td>${cartTotalAmount.toFixed(2)}</td>
						</tr>
						<tr>
							<td>Shipping and Handling</td>
							<td>+ $40</td>
						</tr>
						<tr>
							<td>
								<strong>Grand Total</strong>
							</td>
							<td>
								<strong>${grandTotal.toFixed(2)}</strong>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Fragment>
	);
	const emptyCartDOM = (
		<Fragment>
			<div className={classes.empty_cart_box}>
				<Image
					src={cart}
					alt="cart"
					className={classes.cart_img}
					height={150}
				/>
				<h4>Your Cart is Empty</h4>
				<p>Looks like you have not added anything to your cart.</p>
				<Link href="/products" className="primary__btn">
					continue shopping
				</Link>
			</div>
		</Fragment>
	);

	return (
		<Fragment>
			<Head>
				<title>Cart - Book Store</title>
			</Head>
			<Header />
			<section>
				<div className="container">
					{itemList.length === 0 ? emptyCartDOM : cartPageSection}
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}
