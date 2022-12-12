import { Fragment } from "react";
import BookProducts from "../../components/book-items/BookProducts"
import Header from "../../components/ui/Header";

export default function Products(props) {
	return (
		<Fragment>
			<Header />
			<section>
				<BookProducts booksData={props.fetchedData} />
			</section>
		</Fragment>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://api.itbook.store/1.0/new");
	const data = await response.json();
	return {
		props: {
			fetchedData: data,
		},
	};
}
