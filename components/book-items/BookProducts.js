import BookItems from "./BookItems";
import classes from "./book-item.module.css";

export default function BookProducts({ booksData }) {
	return (
		<div className="container">
			<div className="title_wrap text-center">
				<span>Top Book</span>
				<h2>Collection</h2>
			</div>
			<div className={classes.products}>
				{booksData.books.map((el) => {
					return (
						<BookItems
							id={el.isbn13}
							key={el.isbn13}
							imageUrl={el.image}
							price={Number(el.price.slice(1))}
							title={el.title}
							subtitle={el.subtitle}
							link={el.link}
							isAdded
						/>
					);
				})}
			</div>
		</div>
	);
}
