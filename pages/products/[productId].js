import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import classes from "./product.module.css";
import { useDispatch } from "react-redux";
import { cartStoreAction } from "../../store/cart-items";

export default function ProductDetails({ productDetail }) {
	console.log(productDetail);
	const dispatch = useDispatch();
	const {
		title,
		image,
		subtitle,
		desc,
		publisher,
		year,
		pages,
		price,
		language,
		authors,
		isbn13,
	} = productDetail;

	const addToCartHandler = () => {
		dispatch(
			cartStoreAction.addProduct({
				id: isbn13,
				title,
				price: +price.slice(2),
				image,
			})
		);
	};

	return (
		<Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<div className="container">
				<div className={classes.product_detail_wrap}>
					<div className={classes.image_wrap}>
						<Image
							src={image}
							alt={title}
							width={1000}
							height={1000}
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					</div>
					<div className={classes.detail_wrap}>
						<span>{subtitle}</span>
						<h3>{title}</h3>
						<div className={classes.bottom_wrap}>
							<p>{desc}</p>
							<table className={classes.table_box} width="100%">
								<tbody>
									<tr>
										<td>
											<span>Publisher</span>
										</td>
										<td>{publisher}</td>
									</tr>
									<tr>
										<td>
											<span>Published</span>
										</td>
										<td>{year}</td>
									</tr>
									<tr>
										<td>
											<span>Pages</span>
										</td>
										<td>{pages}</td>
									</tr>
									<tr>
										<td>
											<span>Language</span>
										</td>
										<td>{language}</td>
									</tr>
									<tr>
										<td>
											<span>Authors</span>
										</td>
										<td>{authors}</td>
									</tr>
								</tbody>
							</table>
							<p className={classes.price}>${+price.slice(1)}</p>
							<button
								type="button"
								className={classes.cart_btn}
								onClick={addToCartHandler}
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export async function getStaticPaths() {
	// making array of id's
	const response = await fetch("https://api.itbook.store/1.0/new");
	const data = await response.json();
	const paths = data.books.map((el) => {
		return {
			params: {
				productId: `${el.isbn13}`,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://api.itbook.store/1.0/books/${params.productId}`
	);
	const data = await res.json();
	return {
		props: {
			productDetail: data,
		},
	};
}
