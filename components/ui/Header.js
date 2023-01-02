import Link from "next/link";
import classes from "./ui.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

const navbar = [
	{ id: "nav1", url: "/", text: "Home" },
	{ id: "nav4", url: "/about", text: "About us" },
	{ id: "nav3", url: "/products", text: "Products" },
	{ id: "nav2", url: "/posts", text: "Blogs" },
];

export default function Header() {
	const addedCartItems = useSelector((state) => state.cartItems.totalQuantity);
	const [toggleMenu, setToggleMenu] = useState(true);

	const toggleMenuHandler = () => {
		setToggleMenu((prev) => !prev);
	};

	return (
		<header className={classes.header}>
			<div className={`container ${classes.header__container}`}>
				<Link href="/" className={classes.logo}>
					<Image
						src={Logo}
						alt="Book Store"
						width={100}
						height={100}
						style={{
							height: "40px",
							width: "auto",
						}}
					/>
				</Link>
				<div className={classes.right__box}>
					<ul className={`${classes.nav} ${!toggleMenu ? "show" : ""}`}>
						{navbar.map((el) => (
							<li key={el.id}>
								<Link href={el.url}>{el.text}</Link>
							</li>
						))}
					</ul>
					<Link href="/cart" className={classes.cart__items}>
						<FaShoppingCart />
						<span>{addedCartItems}</span>
					</Link>
					<FaBars className={classes.menubar} onClick={toggleMenuHandler} />
				</div>
			</div>
		</header>
	);
}
