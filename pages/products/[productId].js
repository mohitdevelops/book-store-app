import { Fragment } from "react";
import Header from "../../components/ui/Header";
import classes from "./product.module.css";

export default function ProductDetails({ productDetail }) {

	return (
		<Fragment>
			<Header />
			<div className="container">
				<div className={classes.product_detail_wrap}>
					<div className={classes.image_wrap}>
						<img src={productDetail.image} alt={productDetail.title} />
					</div>
					<div className={classes.detail_wrap}>
						<span>{productDetail.subtitle}</span>
						<h3>{productDetail.title}</h3>
						<div className={classes.bottom_wrap}>
							<p>{productDetail.desc}</p>
							<table className={classes.table_box} width="100%">
								<tbody>
									<tr>
										<td>
											<span>Publisher</span>
										</td>
										<td>{productDetail.publisher}</td>
									</tr>
									<tr>
										<td>
											<span>Published</span>
										</td>
										<td>{productDetail.year}</td>
									</tr>
									<tr>
										<td>
											<span>Pages</span>
										</td>
										<td>{productDetail.pages}</td>
									</tr>
									<tr>
										<td>
											<span>Language</span>
										</td>
										<td>{productDetail.language}</td>
									</tr>
									<tr>
										<td>
											<span>Authors</span>
										</td>
										<td>{productDetail.authors}</td>
									</tr>
								</tbody>
							</table>
							<p className={classes.price}>{productDetail.price}</p>
							<button className={classes.cart_btn}>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
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
