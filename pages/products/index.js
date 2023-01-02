import Head from "next/head";
import { Fragment } from "react";
import BookProducts from "../../components/book-items/BookProducts"
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";

export default function Products(props) {
	return (
		<Fragment>
			<Head>
				<title>Product - Book Store</title>
			</Head>
			<Header />
			<section>
				<BookProducts booksData={props.fetchedData} />
			</section>
			<Footer />
		</Fragment>
	);
}

export async function getStaticProps() {
	const response = await fetch(process.env.API_URL);
	const data = await response.json();
	return {
		props: {
			fetchedData: data,
		},
	};
}
