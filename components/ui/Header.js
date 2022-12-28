import Link from "next/link";
// import { HiShoppingCart } from "react-icons/hi";
import classes from "./ui.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useSelector } from "react-redux";

const navbar = [
	{ id: "nav1", url: "/", text: "Home" },
	{ id: "nav3", url: "/products", text: "Products" },
	{ id: "nav2", url: "/posts", text: "Blogs" },
	// { id: "nav4", url: "/contact", text: "Contact us" },
];

export default function Header() {
	const addedCartItems = useSelector(state => state.cartItems.totalQuantity)
	return (
		<header className={classes.header}>
			<div className={`container ${classes.header__container}`}>
				<Link href="/" className={classes.logo}>
					<Image src={Logo} alt="Food Delivery"  />
				</Link>
				<div className={classes.right__box}>
					<ul className={classes.nav}>
						{navbar.map((el) => (
							<li key={el.id}>
								<Link href={el.url}>{el.text}</Link>
							</li>
						))}
					</ul>
					<Link href="/cart" className={classes.cart__items}>
						Cart <span>{addedCartItems}</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
